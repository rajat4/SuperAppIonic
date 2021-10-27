import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketingScreenPageRoutingModule } from './marketing-screen-routing.module';

import { MarketingScreenPage } from './marketing-screen.page';
import { SplashScreenPageModule } from 'src/app/splash-screen/splash-screen.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketingScreenPageRoutingModule,
    SplashScreenPageModule
  ],
  declarations: [MarketingScreenPage]
})
export class MarketingScreenPageModule {}
