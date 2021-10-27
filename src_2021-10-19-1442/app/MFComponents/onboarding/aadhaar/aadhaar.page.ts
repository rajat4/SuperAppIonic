import { Component, OnInit } from '@angular/core';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-aadhaar',
  templateUrl: './aadhaar.page.html',
  styleUrls: ['./aadhaar.page.scss'],
})
export class AadhaarPage implements OnInit {
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
  constructor(private _dynamicData: DynamicTempleteService,
              private fb: FormBuilder,
              public modalCtrl: ModalController,
              private nav: NavController) { }

  ngOnInit() {
    if(this.currentStatus === 'AccountDetails'){
      this.headerName = 'Address Proof';
    }
    if(this.currentStatus === 'Digilocker'){
      this.progressValue = '0.7';
      this.headerName = 'Setup Investment Account';
      this.digiHeader = 'Digilocker - Documents for KYC';
      this.digipara = 'Your Aadhaar Card must be link to any mobile to receive and confirm OTP';
      this.digiSubHeader = 'Why is Digilocker Needed?';
      this.digiSubPara = 'Digilocker automatically verifies your documents needed for KYC and account opening Aqube';
      this.digiButtonText = 'Proceed for KYC';
    }
    if(this.currentStatus === 'nonDigilocker'){
      this.progressValue = '0.7';
      this.headerName = 'Setup Investment Account';
      this.digiHeader = 'Adhaar eSign';
      this.digipara = 'Your Aadhaar Card must be link to any mobile to receive and confirm OTP';
      this.digiSubHeader = 'Why Is eSign Needed?';
      this.digiSubPara = 'Aadhaar eSign digitally signs your documents needed for KYC and account opening Aqube';
      this.digiButtonText = 'Proceed for Aadhaar E-Sign';
    }
    this.PhoneVerificationForm = this.fb.group({
      otp1: [''],
      otp2: [''],
      otp3: [''],
      otp4: [''],
      otp5: [''],
      otp6: ['']
    })
    this.collectData();
    
  }
  collectData(){

    this._dynamicData.GetLoginTemp(this.languageType).subscribe(data => {
      if (data) {
        this.otpLabels = data.otpLabels;
      }
    });
  }
  showMobileOTP() {
    // alert(this.LoginWithPhoneForm.controls['MobileNumber'].value);
    this.showOTPModal = true;
    // this.LoginWithPhoneHolder = false;
    this.aadhaarVerificationHolder = true;
    this.progressValue = '0.7';
  }
  showSuccess(){
    this.closeOtp();
    this.showOTPModal1 = true;
    this.progressValue = '1';
  }
  closeOtp() {
    this.progressValue = '0.5';
    this.showOTPModal = false;
    
  }
  showSucessContainer(){
    this.showOTPModal1 = false;
    this.currentStatus = 'successContainer';
    this.nav.navigateRoot('enter-pan');
  }
  showAadhaarContainer(){
    this.headerName = 'Address Proof';
    this.currentStatus = 'AccountDetails';
  }
  getOTP(){}
  otpController(event, next, prev, index) {


    if (index == 6) {
      console.log("submit");
    }
    if (event.target.value.length < 1 && prev) {
      prev.setFocus();
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }
}
