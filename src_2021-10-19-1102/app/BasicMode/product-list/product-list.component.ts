import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  languageType: String = "en";
  myLabels: any;

  constructor(private _dynamicData: DynamicTempleteService, private _router: Router) {
    this.GetDynamicData() }

  ngOnInit() {}

  GetDynamicData() {
    this._dynamicData.GetBasicModeProdListBtTabLabels(this.languageType).subscribe(data => {
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

  redirectToBMLanding(){
    this._router.navigate(['./BasicMode']);
  }
}
