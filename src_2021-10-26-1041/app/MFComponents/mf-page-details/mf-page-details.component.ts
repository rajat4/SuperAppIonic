import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mf-page-details',
  templateUrl: './mf-page-details.component.html',
  styleUrls: ['./mf-page-details.component.scss'],
})
export class MfPageDetailsComponent implements OnInit {

  productDetails: any;
  productGraph: any;
  plsBtnToggle: boolean = true;
  addCartToggle: boolean = false;
  amount: string = "₹1,000";
  divType1: string;

  languageType: String = "en";
  myLabels: any;

  constructor(private _dynamicData: DynamicTempleteService,
    public toastController: ToastController,
    private _router: Router) {
    this.GetDynamicData()
  }

  ngOnInit() { }

  GetDynamicData() {
    this._dynamicData.GetMfProductDetailsLabel(this.languageType).subscribe(data => {
      if (data) {
        this.myLabels = data;
      }
    });

    if (this.languageType == "en") {
      this.languageType = "hn"
    } else {
      this.languageType = "en"
    }

    this._dynamicData.GetMFProductPageDetails().subscribe(data => {
      if (data) {
        // console.log(data)

        this.productDetails = data.productDetails;
        this.productGraph = data.productGraph;

        // console.log("test "+this.productGraph);
      }
    });
  }

  plsBtnClick() {

    if (this.plsBtnToggle) {
      this.plsBtnToggle = false;
    } else {
      this.plsBtnToggle = true;
    }
  }

  async investNow() {
    if (!this.plsBtnToggle) {
      this.plsBtnToggle = true;
    }

    const toast = await this.toastController.create({
      message: 'investNow working fine',
      duration: 2000
    });
    toast.present();
  }

  divCartMenuClick() {
    if (!this.plsBtnToggle) {
      this.plsBtnToggle = true;
    }
  }

  menuActionCall(actionName: string) {

    if (!this.plsBtnToggle) {
      this.plsBtnToggle = true;
    }

    if (actionName == "cart") {
      this.addCartToggle = true;
    } else {
      console.log(actionName)
      if (this.addCartToggle) {
        this.addCartToggle = false;
      }
    }
  }

  divAddCartClick(divType) {
    if (divType == "divAddFront") {
      this.divType1 = "divAddFrontFound";
    } else if (divType == "divAddBack") {
      if (this.divType1 != "divAddFrontFound" && this.addCartToggle) {
        this.addCartToggle = false;
      }
      this.divType1 = ""
    }
  }

  updateAmount(updateAmount) {
    this.amount = updateAmount;
  }

  async addToCartBtn() {
    if (this.addCartToggle) {
      this.addCartToggle = false;
    }

    // this._router.navigate(['./LumpsumTransaction']);
    this._router.navigate(['./enter-pan']);
  }

  async investNowBtn() {
    if (this.addCartToggle) {
      this.addCartToggle = false;
    }

    const toast = await this.toastController.create({
      message: 'investNowBtn working fine',
      duration: 2000
    });
    toast.present();
  }
}
