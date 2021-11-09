import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { OverlayBaseController } from '@ionic/angular/util/overlay';
import { OverlayController } from '@ionic/core';
import { Gold6v3Page } from 'src/app/Gold/gold6v3/gold6v3.page';

@Component({
  selector: 'app-add-to-cart-v1',
  templateUrl: './add-to-cart-v1.page.html',
  styleUrls: ['./add-to-cart-v1.page.scss'],
})
export class AddToCartV1Page implements OnInit {

  Opts: any;
  Overlay: any;
  headerName:any;
  showOTPModal:any=false;
  showOTPModal1:any=false;
  aadhaarVerificationHolder:any=false;
  languageType: String = "en";
  otpLabels: any;
  PhoneVerificationForm!: FormGroup;
  currentStatus="Digilocker";
  digiHeader:any;
  digipara:any;
  digiSubHeader:any;
  digiSubPara:any;
  digiButtonText:any;
  progressValue:any="0.5";
  // constructor(private modal: ModalController,private overlay: OverlayController) { }

  ngOnInit() {
    // this.modal.create;
  }
  openModal(){
    // this.openModal.create();
    // this.modal.create;
  }

  constructor(public modalCtrl: ModalController) {}

  async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: Gold6v3Page,
      showBackdrop: true,
   
      // componentProps?: ComponentProps<T>,
      // presentingElement?: HTMLElement,
    
      backdropDismiss: true,
      animated: true,
      swipeToClose: true,
      //mode?: Mode,
      keyboardClose: true,
      id: "1"
    
    });  
    return await modal.present();  
  }  
}
