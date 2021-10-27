import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-robo-advisory2',
  templateUrl: './robo-advisory2.page.html',
  styleUrls: ['./robo-advisory2.page.scss'],
  providers:[NavParams]
})
export class RoboAdvisory2Page implements OnInit {
  name: string;
  rndNum: JSON;
  constructor(public nav:NavController,
    public navCtrl: NavController, public navParams: NavParams) { 
      this.color = navParams.get('data');
    }
  
  ngOnInit() {
  }
  async getFormData(name: string){
    await console.log("Submit Clicked");
    this.name = name;
    console.log("name");
  }
  goToRobo1()
  {
    this.nav.navigateBack('robo1');
    console.log("Clicked on Back Arrow of Page 2")
  }
  goToRobo3(){
    this.nav.navigateForward('robo3');
    console.log("Clicked on Forward Arrow of Page 2");
  }

  color: string;

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
}
function IonicPage() {
  throw new Error('Function not implemented.');
}

