import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-esign2',
  templateUrl: './esign2.page.html',
  styleUrls: ['./esign2.page.scss'],
})
export class Esign2Page implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  goToEsign1(){
    this.nav.navigateBack('esign1');
    console.log("Clicked on chevron-back-outline of esign2");
  }
  goToHome(){
    this.nav.navigateRoot('esign1');
    console.log("Clicked on close of esign2");
  }
}
