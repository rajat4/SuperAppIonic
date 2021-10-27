import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfirmPanPage } from '../confirm-pan/confirm-pan.page';

@Component({
  selector: 'app-enter-pan',
  templateUrl: './enter-pan.page.html',
  styleUrls: ['./enter-pan.page.scss'],
})


export class EnterPANPage implements OnInit {
  
  pan: string;
  id: any;
  ele:any;
  eye:any;

 // @input name;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    // if(this.id == 123)
    localStorage.setItem("PAN_Number", "abc123def456");
    this.navCtrl.navigateForward(['confirm-pan']);
  }
  
  // togglePassword(ele: { type: string; }, eye: { name: string; }) {
  //   if (ele.type === 'password') {
  //     ele.type = 'text';
  //     eye.name = 'eye-off-outline'
  //   }
  //   else {
  //     ele.type = 'password';
  //     eye.name = 'eye-outline'
  //   }
  // }
}
