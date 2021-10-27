import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';

@Component({
  selector: 'app-mf-landing-with-kyc-not-transaction',
  templateUrl: './mf-landing-with-kyc-not-transaction.component.html',
  styleUrls: ['./mf-landing-with-kyc-not-transaction.component.scss'],
})
export class MfLandingWithKYCNotTransactionComponent implements OnInit {

  headerDetails: any;
  headDatails: any;
  startInvestments: any;
  imptInvest: any;
  invtp:any;

  // headerName:any;
  headerName: string = "";
  constructor(private _dynamicData: DynamicTempleteService, private _router: Router) {
    this.GetDynamicData()
  }

  ngOnInit() { }

  GetDynamicData() {
    this._dynamicData.GetMFLandingKYCdoneNoTransaction().subscribe(data => {
      if (data) {
        // console.log(data)

        this.headerDetails = data.header;
        for (let i = 0; i < this.headerDetails.length; i++) {
          // console.log("My data " + this.headerDetails[i].description);

          this.headDatails = this.headerDetails[0].headerData;

        }

        this.headerName = this.headerDetails[0].description;
        this.startInvestments = data.startInvestment;

        this.imptInvest = data.importInvest;
        this.invtp = data.investLike;

        // console.log("test "+this.invtp.title);
      }
    });
  }

  startInvesting(){
    // this._router.navigate(['./MfLanding']);
    // alert("development is progress..!")
  }

  redirectToSALanding(){
    this._router.navigate(['./SupperAppLanding']);
  }
}
