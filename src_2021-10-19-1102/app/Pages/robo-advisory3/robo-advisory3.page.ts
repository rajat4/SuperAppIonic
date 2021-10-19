import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-robo-advisory3',
  templateUrl: './robo-advisory3.page.html',
  styleUrls: ['./robo-advisory3.page.scss'],
})
export class RoboAdvisory3Page implements OnInit {

  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  
  goToRobo2()
  {
    this.nav.navigateBack('robo2');
    console.log("Clicked on Back Arrow of Page 3");
  }

  goToRobo4()
  {
    this.nav.navigateForward('robo4');
    console.log("Clicked on Forward Arrow of Page 3");
  }
}
