import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboAdvisory5PageRoutingModule } from './robo-advisory5-routing.module';

import { RoboAdvisory5Page } from './robo-advisory5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboAdvisory5PageRoutingModule
  ],
  declarations: [RoboAdvisory5Page]
})
export class RoboAdvisory5PageModule {}
