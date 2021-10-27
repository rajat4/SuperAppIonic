import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboAdvisory3PageRoutingModule } from './robo-advisory3-routing.module';

import { RoboAdvisory3Page } from './robo-advisory3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboAdvisory3PageRoutingModule
  ],
  declarations: [RoboAdvisory3Page]
})
export class RoboAdvisory3PageModule {}
