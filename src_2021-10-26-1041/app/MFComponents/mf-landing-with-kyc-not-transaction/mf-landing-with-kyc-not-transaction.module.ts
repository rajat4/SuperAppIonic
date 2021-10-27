import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { MfLandingWithKYCNotTransactionComponent } from './mf-landing-with-kyc-not-transaction.component';

import { IonicModule } from '@ionic/angular';
import {MfLandingWithKYCNotTransactionRoutingModule} from 'src/app/MFComponents/mf-landing-with-kyc-not-transaction/mf-landing-with-kyc-not-transaction-routing.module'

import{DashboardPage} from 'src/app/MFComponents/tab_pages/dashboard/dashboard.page'
const routes: Routes = [
  {
    path: '',
    component: MfLandingWithKYCNotTransactionComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MfLandingWithKYCNotTransactionRoutingModule
    // RouterModule.forChild(routes)
  ],
  // declarations:[MfLandingWithKYCNotTransactionComponent, MfHeaderComponent]
  declarations:[MfLandingWithKYCNotTransactionComponent]
  // declarations:[DashboardPage]
})
export class MfLandingWithKYCNotTransactionModule {}
