import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';
import { Gold25v1Service } from 'src/app/Services/gold25v1.service';
// import { Gold25v1Service } from './Gold25v1.service';


@Component({
  selector: 'app-gold25v1',
  templateUrl: './gold25v1.page.html',
  styleUrls: ['./gold25v1.page.scss'],
})
export class Gold25v1Page implements OnInit {

  Gold: any;
  modal: boolean = true;

  constructor(public modalCtrl: ModalController,
              private dynamicData: Gold25v1Service,
              public dD: DynamicTempleteService) { }

  ngOnInit() {
    this.GetDynamicData();
  }
  openModal(){
    this.modal = true;
  }
  GetDynamicData() {
    this.dD.GetDynamicGoldData().subscribe(data => {
      if (data) {
        // console.log("languageType " + JSON.stringify(data));
        this.Gold = data;
      }
    });
  }
}
