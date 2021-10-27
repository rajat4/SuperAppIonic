import { Component, OnInit } from '@angular/core';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {

  languageType: String = "en";
  myLabels: any;

  constructor(private _dynamicData: DynamicTempleteService) {
    this.GetDynamicData() }

  ngOnInit() {}

  GetDynamicData() {
    this._dynamicData.GetBasicModeEducationLabels(this.languageType).subscribe(data => {
      if (data) {
        this.myLabels = data;
      }
    });

    if (this.languageType == "en") {
      this.languageType = "hn"
    } else {
      this.languageType = "en"
    }
  }
}
