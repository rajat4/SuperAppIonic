import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SupperAppLandingPage } from './supper-app-landing.page';

const routes: Routes = [
  {
    path: '',
    component: SupperAppLandingPage
  }
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SupperAppLandingPageRoutingModule {}
