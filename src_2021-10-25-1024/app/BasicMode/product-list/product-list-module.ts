import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import {ProductListComponent} from './product-list.component'

import { IonicModule } from '@ionic/angular';
import {ProductListRoutingModule} from 'src/app/BasicMode/product-list/product-list-rounting-module'

import{DashboardPage} from 'src/app/BasicMode/product-list-tab-pages/dashboard/dashboard.page'

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductListRoutingModule
    // RouterModule.forChild(routes)
  ],
  // declarations:[MfLandingWithKYCNotTransactionComponent, MfHeaderComponent]
  declarations:[ProductListComponent]
  // declarations:[DashboardPage]
})
export class ProductListModule {}
