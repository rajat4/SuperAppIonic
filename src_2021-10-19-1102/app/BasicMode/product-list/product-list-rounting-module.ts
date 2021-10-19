import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductListComponent} from './product-list.component'

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    children: [
      // {
      //   path: 'home',
      //   loadChildren: () => import('src/app/BasicMode/basic-mode/basic-mode.module').then(m => m.BasicModeModule)
      //   // loadChildren: () => import('../tab_pages/home/home.module').then(m => m.HomePageModule)
      // },
      {
        path: 'dashboard',
        loadChildren: () => import('../product-list-tab-pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'invest',
        loadChildren: () => import('../product-list-tab-pages/invest/invest.module').then(m => m.InvestPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../product-list-tab-pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'watchlist',
        loadChildren: () => import('../product-list-tab-pages/watchlist/watchlist.module').then(m => m.WatchlistPageModule)
      },
      {
        path: '',
        redirectTo: '/BasicModeProductList/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: './BasicModeProductList/dashboard',
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
export class ProductListRoutingModule {}
