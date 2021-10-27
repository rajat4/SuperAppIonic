import { Component, OnInit } from '@angular/core';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';


@Component({
  selector: 'app-lumpsum-transaction',
  templateUrl: './lumpsum-transaction.component.html',
  styleUrls: ['./lumpsum-transaction.component.scss'],
})
export class LumpsumTransactionComponent implements OnInit {
  lumpsumTransData: any;
  constructor(private _dynamicData: DynamicTempleteService) {
    this.GetDynamicData()
   }

  ngOnInit() {}

  GetDynamicData() {
    this._dynamicData.GetLumpsumTransactionDetails().subscribe(data => {
      if (data) {
        console.log("LumpsumTransaction : " + data)
        this.lumpsumTransData = data;
      }
    });
  }
}
