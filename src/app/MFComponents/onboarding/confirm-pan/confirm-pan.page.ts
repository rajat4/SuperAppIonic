import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-pan',
  templateUrl: './confirm-pan.page.html',
  styleUrls: ['./confirm-pan.page.scss'],
})
export class ConfirmPanPage implements OnInit {

  pan: string;
  rbs: any;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    console.log(localStorage.getItem("PAN_Number"));
  }

  pushPage1(){
    
    this.navCtrl.navigateForward(['LumpsumTransaction']);

  }
}
const btn = document.querySelector('#btn');

