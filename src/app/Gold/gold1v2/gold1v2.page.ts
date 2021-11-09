import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gold1v2',
  templateUrl: './gold1v2.page.html',
  styleUrls: ['./gold1v2.page.scss'],
})
export class Gold1v2Page implements OnInit {

  defaultImage = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713';
  image1 = 'https://images.unsplash.com/photo-1566837945700-30057527ade0';
  image2 = 'D:/Umesh/Sarvesh Code 11.10.21/SuperAppIonic/src/assets/Images/main.png';

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  back1(){
    this.nav.navigateBack('gold1v1');
  }
  
  // forward1(){
  //   this.nav.navigateBack('gold2v1');
  // }
}
