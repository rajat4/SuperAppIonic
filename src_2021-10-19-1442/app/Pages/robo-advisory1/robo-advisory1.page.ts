import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RoboAdvisory2Page } from '../robo-advisory2/robo-advisory2.page';

@Component({
  selector: 'app-robo-advisory1',
  templateUrl: './robo-advisory1.page.html',
  styleUrls: ['./robo-advisory1.page.scss'],
})
export class RoboAdvisory1Page implements OnInit {
  name: string;
  rndNum: JSON;
  
  // const nav = document.querySelector('ion-nav');

  constructor(private navController: NavController,
              public nav: NavController) { 
                
              }
  
  ngOnInit() {
  }
  async getFormData(name: string){
    this.navController.navigateForward('robo2')
    await console.log("SAVE Clicked");
    this.name = name;
    console.log("name");
  }
  goTo(color) {
    color = color || 'No Color Entered';
    this.nav.navigateForward('robo2', 
      // data: color
    );
  }
  Robo1Cancel(){
    this.nav.navigateBack('home');
    console.log("Clicked on Cancel Button of Robo 1");
  }
  goToRoboHome(){
    this.nav.navigateBack('home');
    console.log("Clicked on Back Arrow of Page 1");
  }
  goToRobo2(){
    this.nav.navigateForward('robo2');
    console.log("Clicked on Forward Arrow of Page 1");
  }
}
