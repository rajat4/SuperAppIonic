import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-robo-advisory4',
  templateUrl: './robo-advisory4.page.html',
  styleUrls: ['./robo-advisory4.page.scss'],
})
export class RoboAdvisory4Page implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  goToRoboHome(){
    this.nav.navigateBack('esign1');
    console.log("Clicked on Forward Arrow of Page 4");
  }
  goToRobo3(){
    this.nav.navigateForward('robo3');
    console.log("Clicked on Back Arrow of Page 4");
  }
}
