import { Component, OnInit } from '@angular/core';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-supper-app-landing',
  templateUrl: './supper-app-landing.page.html',
  styleUrls: ['./supper-app-landing.page.scss'],
})
export class SupperAppLandingPage implements OnInit {

  showModal: boolean = true;
  showInteractiveModal: boolean = false;
  showFab: boolean = true;

  filterTabs: any;
  data: any;
  SupperAppLandingPage: boolean = false;
  greeting: string = "";
  recommendedAction: string = "";

  interactiveState: boolean = false;
  audioPlay: boolean = false;
  runGif: boolean = false;
  isVisible: boolean = false;

  constructor(private _dynamicData: DynamicTempleteService,
    public toastController: ToastController,
    private _router: Router,
    private modalController: ModalController,
    private animationCtrl: AnimationController) {
    this.GetDynamicData()
  }

  ngOnInit() {


    // fetch('../../../assets/templateData/templateData.json').then(res => res.json())
    //   .then(json => {
    //     this.data = json;
    //     console.log(this.data)
    //     if (this.data[0].templateName == "SupperAppLandingPage") {
    //       this.SupperAppLandingPage = true;
    //     }
    //     if (this.data[0].templateName == "SupperAppLandingPage") {
    //       this.SupperAppLandingPage = true;
    //     }
    //     console.log(this.data[0].templateName)
    //   });

    setTimeout(() => {
      this.interactiveState = true;

      const cartAnimation = this.animationCtrl.create('cart-animation')
        .addElement(document.getElementById('myFabSL'))
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.2)' },
          { offset: 0.8, transform: 'scale(0.9)' },
          { offset: 1, transform: 'scale(1)' }
        ]);

      const cartColorAnimation = this.animationCtrl.create('cart-color-animation')
        .addElement(document.getElementById('myFabSL'))
        .fromTo('transform', 'rotate(0deg)', 'rotate(45deg)');
      // .duration(1500)
      // .iterations(2)
      // .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      // .fromTo('opacity', '1', '0.2');


      const parent = this.animationCtrl.create('parent')
        .duration(1000)
        .easing('ease-out')
        .iterations(15)
        .direction('alternate')
        .addAnimation([cartAnimation]);

      // Playing the parent starts both animations
      parent.play();

      interactiveEnable();
    }, 3000);  //3s

    function interactiveEnable() {
      setTimeout(() => {
        this.interactiveState = false;
      }, 1000);
    }

  }
  async fabClick() {
    // fabClickState
    this.showFab = false;
    this.runGif = false;
    if (this.interactiveState) {
      this.interactiveState = false;
      this.isVisible = true;

      const enterAnimation = (baseEl: any) => {
        const backdropAnimation = this.animationCtrl.create()
          // .addElement(baseEl.querySelector('ion-backdrop')!)
          .addElement(baseEl.querySelector('testAnim')!)
          .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

        const wrapperAnimation = this.animationCtrl.create()
          .addElement(baseEl.querySelector('.modal-wrapper')!)
          .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' }
          ]);

        return this.animationCtrl.create()
          .addElement(baseEl)
          .easing('ease-out')
          .duration(500)
          .addAnimation([backdropAnimation, wrapperAnimation]);
      }

      const leaveAnimation = (baseEl: any) => {
        return enterAnimation(baseEl).direction('reverse');
      }

      // const modal = await this.modalController.create({
      //   component: ModalPage,
      //   enterAnimation,
      //   leaveAnimation
      // });

      // return await modal.present();

      const backdropAnimation = this.animationCtrl.create()
        // .addElement(baseEl.querySelector('ion-backdrop')!)
        .addElement(document.getElementById('interactiveModelSL')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        // .addElement(baseEl.querySelector('.modal-wrapper')!)
        .addElement(document.getElementById('interactiveModelSL')!)
        .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
      // .keyframes([
      //   { offset: 0, opacity: '0', transform: 'scale(0)' },
      //   { offset: 1, opacity: '0.99', transform: 'scale(1)' }
      // ]
      // );

      const interactiveStart = this.animationCtrl.create()
        // .addElement(document.getElementById('interactiveModelSL'))
        .easing('ease-out')
        .duration(1000)
        .addAnimation([backdropAnimation, wrapperAnimation]);

      interactiveStart.play();

      this.showInteractiveModal = true;

    } else {
      this.interactiveState = false;
      this.showInteractiveModal = false;
      this._router.navigate(['../BasicMode']);
    }

  }

  close() {
    this.showModal = false;
    this.showFab = true;
    this.runGif = false;
    this.interactiveState = false;
  }

  async closeInteractiveModal() {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        // .addElement(baseEl.querySelector('ion-backdrop')!)
        .addElement(baseEl.querySelector('interactiveModelSL')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    // const modal = await this.modalController.create({
    //   component: ModalPage,
    //   enterAnimation,
    //   leaveAnimation
    // });

    const backdropAnimation = this.animationCtrl.create()
      // .addElement(baseEl.querySelector('ion-backdrop')!)
      .addElement(document.getElementById('interactiveModelSL')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl.create()
      // .addElement(baseEl.querySelector('.modal-wrapper')!)
      .addElement(document.getElementById('interactiveModelSL')!)
      .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    // .keyframes([
    //   { offset: 0, opacity: '0', transform: 'scale(0)' },
    //   { offset: 1, opacity: '0.99', transform: 'scale(1)' }
    // ]
    // );

    const interactiveReverse = this.animationCtrl.create()
      // .addElement(document.getElementById('interactiveModelSL'))
      .easing('ease-out')
      .duration(1000)
      .addAnimation([backdropAnimation.direction('reverse'), wrapperAnimation.direction('reverse')]);

    interactiveReverse.play();

    setTimeout(() => {
      this.interactiveState = false;
      this.isVisible = false;
    }, 1000);


    // this.interactiveState = false;
    this.runGif = false;
    // this.showInteractiveModal = false;    
    this.showFab = true;
  }

  async openInteractiveAdd() {
    this.showInteractiveModal = false;
    this.runGif = false;
    this.interactiveState = false;
    this.showFab = true;
    const toast = await this.toastController.create({
      message: 'Thank you...!',
      duration: 2000
    });
    toast.present();
    this.closeInteractiveModal()
  }

  GetDynamicData() {
    this._dynamicData.GetDynamicWealthData().subscribe(data => {
      if (data) {
        console.log("data from service" + data[0].templateName)
        if (data[0].templateName != "" && data[0].templateName == "SupperAppLandingPage") {
          this.SupperAppLandingPage = true;
          this.greeting = data[0].welcomeName;
          this.recommendedAction = data[0].description;
        }
      }
      //   if (data.IsSuccess) {        
      //     if (data.ExpilicitContent != "" && data.IsExpilicit == "Y") {  
      //         this.ShowExplicitContent = true;          
      //         this.ExplicitCode = data.ExpilicitCode;
      //         this.ExplicitContent = data.ExpilicitContent;
      //         this.ExplicitFlag = "Y";            
      //     }
      //     else if (data.ExpilicitContent != "" && data.IsExpilicit == "N") {  
      //       this.ShowExplicitContent = true;          
      //       this.ExplicitCode = data.ExpilicitCode;
      //       this.ExplicitContent = data.ExpilicitContent;
      //       this.ExplicitFlag = "N";            
      //     }
      //     else {
      //         this.ShowExplicitContent = false;
      //         this.ExplicitCode = "";
      //         this.ExplicitContent = "";
      //         this.ExplicitFlag = "";
      //     }
      // }
    });
  }

  async pressed() {
    // const toast = await this.toastController.create({
    //   message: 'pressed',
    //   duration: 2000
    // });
    // toast.present();
  }

  async active() {
    this.audioPlay = true;
    this.runGif = true;
    this.interactiveState = false;
    this.showFab = false;
    const toast = await this.toastController.create({
      message: 'We are listening to you...',
      duration: 2000
    });
    toast.present();
  }

  async released() {
    // const toast = await this.toastController.create({
    //   message: 'Your voice recorded successfully..!',
    //   duration: 2000
    // });
    // toast.present();

    this.audioPlay = false;
  }

}