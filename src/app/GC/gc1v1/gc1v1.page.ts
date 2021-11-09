import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GC1v1Service } from './gc1v1.service';

@Component({
  selector: 'app-gc1v1',
  templateUrl: './gc1v1.page.html',
  styleUrls: ['./gc1v1.page.scss'],
})
export class GC1v1Page implements OnInit {

  GC:any;
  constructor(public dD: GC1v1Service,
              public nav: NavController) { }

  ngOnInit() {
    this.GetDynamicData1();
  }
  GetDynamicData1() {
    this.dD.DataGC1v1().subscribe(data => {
      if (data) {
        console.log("languageType " + JSON.stringify(data));
        this.GC = data;
      }
    });
  }

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];


  back(){
    this.nav.navigateBack('/gold6v3');
  }
}


