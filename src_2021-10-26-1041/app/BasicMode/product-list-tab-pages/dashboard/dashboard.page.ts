import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  headerDetails: any;
  headDatails: any;
  startInvestments: any;
  imptInvest: any;
  invtp:any;
  expFund:any;

  // headerName:any;
  headerName: string = "";
  constructor(private _dynamicData: DynamicTempleteService, public toastController: ToastController,
    private _router: Router) {
    this.GetDynamicData()
  }


  ngOnInit() {
  }

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
        this.expFund = data.exploreFunds;

        // console.log("test "+this.invtp.title);
      }
    });
  }

  // async startInvesting(){
  //   // this._router.navigate(['./AddToCart']);
  //     const toast = await this.toastController.create({
  //       message: 'Development in Progress',
  //       duration: 2000
  //     });
  //     toast.present();
  // }
  navigateToAddToCart(){
    this._router.navigate(['./MfProductDetails']);
  }

  navigateToFilter(){
    this._router.navigate(['./MfFilter']);
  }
}
