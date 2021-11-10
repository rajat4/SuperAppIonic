import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GC1v2Service } from './gc1v2.service';

@Component({
  selector: 'app-gc1v2',
  templateUrl: './gc1v2.page.html',
  styleUrls: ['./gc1v2.page.scss'],
})
export class GC1v2Page implements OnInit {
  GC: any;
  a: 2;
  b: 8;

  constructor(public dD: GC1v2Service,
              public nav: NavController) { }

  ngOnInit() {
    this.GetDynamicData1();
  }
  GetDynamicData1() {
    this.dD.DataGC1v2().subscribe(data => {
      if (data) {
        console.log("languageType " + JSON.stringify(data));
        this.GC = data;
      }
    });
}

editCart(){
  this.nav.navigateForward("gc2v1");
}
}
