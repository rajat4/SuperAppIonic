import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold12v1PageRoutingModule } from './gold12v1-routing.module';

import { Gold12v1Page } from './gold12v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold12v1PageRoutingModule
  ],
  declarations: [Gold12v1Page]
})
export class Gold12v1PageModule {}
