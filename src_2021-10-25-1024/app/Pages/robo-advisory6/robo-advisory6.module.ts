import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboAdvisory6PageRoutingModule } from './robo-advisory6-routing.module';

import { RoboAdvisory6Page } from './robo-advisory6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboAdvisory6PageRoutingModule
  ],
  declarations: [RoboAdvisory6Page]
})
export class RoboAdvisory6PageModule {}
