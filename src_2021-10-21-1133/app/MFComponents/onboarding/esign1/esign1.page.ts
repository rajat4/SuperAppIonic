import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-esign1',
  templateUrl: './esign1.page.html',
  styleUrls: ['./esign1.page.scss'],
})
export class Esign1Page implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  goToRobo4()
  {
    this.nav.navigateBack('robo4');
    console.log("Clicked on chevron-back-outline of esign1");
  }
  esign2(){
    this.nav.navigateForward('esign2');
    console.log("Clicked on Footer Button Continue");
  }
}
