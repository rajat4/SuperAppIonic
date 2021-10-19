import { Component, OnInit } from '@angular/core';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';

@Component({
  selector: 'app-wealth',
  templateUrl: './wealth.component.html',
  styleUrls: ['./wealth.component.scss'],
})
export class WealthComponent implements OnInit {

  segmentModel = "Mutual Fund"
  expFund: any;
  
  languageType: String = "en";
  myLabels: any;

  constructor(private _dynamicData: DynamicTempleteService) {
    this.GetDynamicData() }

  ngOnInit() {}

  GetDynamicData() {
    this._dynamicData.GetBasicModeWealthLabels(this.languageType).subscribe(data => {
      if (data) {
        this.myLabels = data;
      }
    });

    if (this.languageType == "en") {
      this.languageType = "hn"
    } else {
      this.languageType = "en"
    }

    this._dynamicData.GetBasicMOdeDetails().subscribe(data => {
      if (data) {
        // console.log("data from service" + data[0].templateName)
        // this.segmentModel = data.filterTab[0];
        // this.filterTabs = data.filterTab;
        this.expFund = data.exploreFunds;
      }
    });
  }

  async categoryChanged(selectedTab) {
    // const toast = await this.toastController.create({
    //   message: 'You have selected ' + this.segmentModel,
    //   duration: 2000
    // });
    // toast.present();

  }
}
