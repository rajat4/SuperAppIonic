import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MfLandingWithKYCNotTransactionComponent} from './mf-landing-with-kyc-not-transaction.component'

const routes: Routes = [
  {
    path: '',
    component: MfLandingWithKYCNotTransactionComponent,
    children: [
      // {
      //   path: 'home',
      //   loadChildren: () => import('src/app/Pages/supper-app-landing/supper-app-landing.module').then(m => m.SupperAppLandingPageModule)
      //   // loadChildren: () => import('../tab_pages/home/home.module').then(m => m.HomePageModule)
      // },
      {
        path: 'dashboard',
        loadChildren: () => import('../tab_pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'invest',
        loadChildren: () => import('../tab_pages/invest/invest.module').then(m => m.InvestPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../tab_pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'watchlist',
        loadChildren: () => import('../tab_pages/watchlist/watchlist.module').then(m => m.WatchlistPageModule)
      },
      {
        path: '',
        redirectTo: '/MfLanding/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: './MfLanding/dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class MfLandingWithKYCNotTransactionRoutingModule {}
