import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';

@Component({
  selector: 'app-login-with-phone',
  templateUrl: './login-with-phone.page.html',
  styleUrls: ['./login-with-phone.page.scss'],
})
export class LoginWithPhonePage implements OnInit {
  LoginWithPhoneForm!: FormGroup;
  PhoneVerificationForm!: FormGroup;

  LoginWithPhoneHolder: boolean = true;
  PhoneVerificationHolder: boolean = false;
  EnteredMobileNumber: number | undefined;
  otp: string;
  // OTP: string;
  showModalSMGSuccesPhone: boolean = false;
  showOTPModal: boolean = false;

  languageType: String = "en";
  myLabels: any;
  otpLabels: any;

  constructor(private _dynamicData: DynamicTempleteService, 
              private fb: FormBuilder, 
              private _router: Router, 
              public modalCtrl: ModalController) {
    this.GetDynamicData()
  }

  ngOnInit() {
    this.LoginWithPhoneForm = this.fb.group({
      MobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
    this.PhoneVerificationForm = this.fb.group({
      otp1: [''],
      otp2: [''],
      otp3: [''],
      otp4: [''],
      otp5: [''],
      otp6: ['']
    })
  }

  GetDynamicData() {

    this._dynamicData.GetLoginTemp(this.languageType).subscribe(data => {
      if (data) {
        // console.log("languageType " + data.headerTitle)
        this.myLabels = data;
        this.otpLabels = data.otpLabels;
      }
    });

    if (this.languageType == "en") {
      this.languageType = "hn"
    } else {
      this.languageType = "en"
    }
  }

  getMobileNumber() {
    // alert(this.LoginWithPhoneForm.controls['MobileNumber'].value);
    this.EnteredMobileNumber = this.LoginWithPhoneForm.controls['MobileNumber'].value;
    this.showOTPModal = true;
    // this.LoginWithPhoneHolder = false;
    this.PhoneVerificationHolder = true;
  }
  previous() {
    this.PhoneVerificationHolder = false;
    this.LoginWithPhoneHolder = true;
  }
  getOTP() {
    let otp1, otp2, otp3, otp4, otp5, otp6;
    otp1 = this.PhoneVerificationForm.controls['otp1'].value;
    otp2 = this.PhoneVerificationForm.controls['otp2'].value;
    otp3 = this.PhoneVerificationForm.controls['otp3'].value;
    otp4 = this.PhoneVerificationForm.controls['otp4'].value;
    otp5 = this.PhoneVerificationForm.controls['otp5'].value;
    otp6 = this.PhoneVerificationForm.controls['otp6'].value;
    this.otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    //  alert( this.otp)
    this.showModalSMGSuccesPhone = true;
    // this._router.navigate(['../SupperAppLanding']);
    this._router.navigate(['../BasicMode']);
  }
  close() {
    this.showModalSMGSuccesPhone = false;
  }

  closeOtp() {
    this.showOTPModal = false;
  }
  // move(previousOtpCh, nextOtpch)
  // {
  //   var length = previousOtpCh.length;
  //   var maxlength = previousOtpCh.getAttribute("maxlength");
  //   if(length == maxlength ){
  //     nextOtpch.focus();
  //   }
  // }
  move(e: any, p: any, c: any, n: any) {
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if (length == maxlength) {
      n.focus();
    }
    console.log(e);
  }


  otpController(event, next, prev, index) {


    if (index == 6) {
      console.log("submit")
    }
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }
  onContinueClick(){
    this._router.navigateByUrl('../BasicMode/wealth');
    console.log("Clicked on Continue");
  }
}
