import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { ToastController } from '@ionic/angular';
// import { Firebase } from '@ionic-native/firebase/ngx';
// import firebase from 'firebase'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  showModal: boolean = false;
  SMGSuccessGmail: boolean = false;
  GmailContent: boolean = true;

  languageType: String = "en";
  myLabels: any;

  userData: any;

  constructor(private _dynamicData: DynamicTempleteService, public modalCtrl: ModalController, private _router: Router,
    private fb: Facebook, private platform: Platform,
    public toastController: ToastController) {

  }
  ngOnChange() {
    console.log("singup");
  }
  ngOnInit() {
    this.GetDynamicData();
  }

  GetDynamicData() {
    this._dynamicData.GetSignUpLabels(this.languageType).subscribe(data => {
      if (data) {
        // console.log("languageType " + data.headerTitle)
        this.myLabels = data;
      }
    });

    if (this.languageType == "en") {
      this.languageType = "hn"
    } else {
      this.languageType = "en"
    }
  }

  signInWithFB() {

    if (this.platform.is('cordova')) {
      this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
        // alert('Logged into Facebook! ' + JSON.stringify(response));
        this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
          this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'], last_name: profile['last_name'] }

          // this._router.navigate(['../BasicMode']);

          // this.loggedInwithFB();

          // alert("You are logged in with " + profile['name'] + profile['first_name'] + " " + profile['last_name']);
          alert("You are logged in with " + profile['name']);
          this._router.navigate(['../BasicMode']);

        }).catch(e => {
          // console.log('Error logging into Facebook', e);
          alert('Login ERROR ' + e);
        });
      }).catch(e => {
        // console.log('Error logging into Facebook', e);
        alert('Login ERROR ' + e);
      });

    } else {
      // this.fbLogin();
      alert('web facebook required');
    }


    // this.fb.logout()
    // .then( )
    // .catch(e => console.log('Error logout from Facebook', e));

    // this.fb.getLoginStatus()
    // .then(res => {
    //   console.log(res.status);

    //   if(res.status === "connect") {
    //     // this.isLoggedIn = true;
    //     console.log("Logged in ")
    //   } else {
    //     // this.isLoggedIn = false;
    //     console.log("Not Logged in ")
    //   }
    // })
    // .catch(e => console.log(e));
  }

  // fbLogin(): Promise<any> {
  //   return this.fb.login(['email'])
  //   .then( response => {
  //     const facebookCredential = this.firebase.auth.FacebookAuthProvider
  //       .credential(response.authResponse.accessToken);

  //     this.firebase.auth().signInWithCredential(facebookCredential)
  //       .then( success => { 
  //         console.log("Firebase success: " + JSON.stringify(success)); 
  //       });

  //   }).catch((error) => { console.log(error) });
  // }

  loggedInwithFB() {
    // const toast = await this.toastController.create({
    //   message: 'Facebook worked ' + userData,
    //   duration: 2000
    // });
    // toast.present();

    alert("Facebook : " + this.userData.email);
    this._router.navigate(['../BasicMode']);
  }
  LoginWithPhone() {
    this._router.navigate(['../LoginWithPhone']);
  }

  close() {
    this.showModal = false;
  }
  signInWithGoogle() {
    this.showModal = true;
  }

  showSMGSuccessGmail() {
    // this._router.navigate(['../SupperAppLanding']);
    this._router.navigate(['../BasicMode']);
    // this.SMGSuccessGmail= true;
    // this.GmailContent= false
  }
}