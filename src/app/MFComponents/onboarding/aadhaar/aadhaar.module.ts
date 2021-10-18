import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AadhaarPageRoutingModule } from './aadhaar-routing.module';

import { AadhaarPage } from './aadhaar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule,
    AadhaarPageRoutingModule
  ],
  declarations: [AadhaarPage]
})
export class AadhaarPageModule {}
