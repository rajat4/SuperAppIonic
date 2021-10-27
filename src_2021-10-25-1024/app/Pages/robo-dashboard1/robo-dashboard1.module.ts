import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoboDashboard1PageRoutingModule } from './robo-dashboard1-routing.module';

import { RoboDashboard1Page } from './robo-dashboard1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoboDashboard1PageRoutingModule
  ],
  declarations: [RoboDashboard1Page]
})
export class RoboDashboard1PageModule {}
