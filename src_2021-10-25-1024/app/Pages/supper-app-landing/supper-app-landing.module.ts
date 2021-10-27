import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupperAppLandingPageRoutingModule } from './supper-app-landing-routing.module';

import { SupperAppLandingPage } from './supper-app-landing.page';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { WealthWellnessComponent } from 'src/app/Components/wealth-wellness/wealth-wellness.component';
import { HealthWellnessComponent } from 'src/app/Components/health-wellness/health-wellness.component'
import {AllWellnessComponent} from 'src/app/Components/all-wellness/all-wellness.component'
import { ReactiveFormsModule } from '@angular/forms';
import { LongPressModule } from 'ionic-long-press';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LongPressModule,
    SupperAppLandingPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SupperAppLandingPage, HeaderComponent, WealthWellnessComponent, HealthWellnessComponent, AllWellnessComponent ]
})
export class SupperAppLandingPageModule {}
