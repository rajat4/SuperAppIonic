import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold5v1PageRoutingModule } from './gold5v1-routing.module';

import { Gold5v1Page } from './gold5v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold5v1PageRoutingModule
  ],
  declarations: [Gold5v1Page]
})
export class Gold5v1PageModule {}
