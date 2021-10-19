import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-robo-advisory4',
  templateUrl: './robo-advisory4.page.html',
  styleUrls: ['./robo-advisory4.page.scss'],
})
export class RoboAdvisory4Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToRobo1(){
    this.router.navigateByUrl('robo1');
    console.log("Clicked on Forward Arrow of Page 4");
  }
  goToRobo3(){
    this.router.navigateByUrl('robo3');
    console.log("Clicked on Back Arrow of Page 4");
  }
}
