import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GC2v1Service } from './gc2v1.service';

@Component({
  selector: 'app-gc2v1',
  templateUrl: './gc2v1.page.html',
  styleUrls: ['./gc2v1.page.scss'],
})
export class Gc2v1Page implements OnInit {
  GC: any;

  constructor(private dD: GC2v1Service, private nav: NavController) { }

  ngOnInit() {
    this.GetDynamicData1();
  }
  GetDynamicData1() {
    this.dD.DataGC2v1().subscribe(data => {
      if (data) {
        console.log("languageType " + JSON.stringify(data));
        this.GC = data;
      }
    });
}
  myCart(){
    this.nav.navigateBack('gc1v2');
  }
}
