import { Component, OnInit } from '@angular/core';
import { Gold6v3Service } from 'src/app/Gold/gold6v3/gold6v3.service';

@Component({
  selector: 'app-gold6v3',
  templateUrl: './gold6v3.page.html',
  styleUrls: ['./gold6v3.page.scss'],
})
export class Gold6v3Page implements OnInit {
  Gold:any;
  constructor(public dD: Gold6v3Service) { }

  ngOnInit() {
    this.GetDynamicData1();
  }
  GetDynamicData1() {
    this.dD.GetDynamicGoldData6v3().subscribe(data => {
      if (data) {
        console.log("languageType " + JSON.stringify(data));
        this.Gold = data;
      }
    });
  }
}
