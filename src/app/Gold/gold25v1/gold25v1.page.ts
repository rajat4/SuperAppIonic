import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Rajat1Service } from './rajat1.service';


@Component({
  selector: 'app-gold25v1',
  templateUrl: './gold25v1.page.html',
  styleUrls: ['./gold25v1.page.scss'],
})
export class Gold25v1Page implements OnInit {

  Gold: any;
  modal: boolean = false;

  constructor(public modalCtrl: ModalController,
              private dynamicData: Rajat1Service) { }

  ngOnInit() {
    this.GetDynamicData();
  }
  openModal(){
    this.modal = true;
  }
  GetDynamicData() {
    this.dynamicData.GetDynamicGoldData().subscribe(data => {
      if (data) {
        console.log("languageType " + JSON.stringify(data));
        this.Gold = data;
      }
    });
  }
}
