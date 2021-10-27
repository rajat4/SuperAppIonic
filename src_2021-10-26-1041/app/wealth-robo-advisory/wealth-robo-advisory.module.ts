import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WealthRoboAdvisoryRoutingModule } from './wealth-robo-advisory-routing';

import { WealthRoboAdvisoryComponent } from './wealth-robo-advisory.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WealthRoboAdvisoryRoutingModule
  ],
  declarations: [WealthRoboAdvisoryComponent]
})
export class WealthRoboAdvisoryModule {}
