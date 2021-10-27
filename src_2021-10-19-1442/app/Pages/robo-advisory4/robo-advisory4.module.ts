import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboAdvisory4PageRoutingModule } from './robo-advisory4-routing.module';

import { RoboAdvisory4Page } from './robo-advisory4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboAdvisory4PageRoutingModule
  ],
  declarations: [RoboAdvisory4Page]
})
export class RoboAdvisory4PageModule {}
