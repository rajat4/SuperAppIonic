import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold17v1PageRoutingModule } from './gold17v1-routing.module';

import { Gold17v1Page } from './gold17v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold17v1PageRoutingModule
  ],
  declarations: [Gold17v1Page]
})
export class Gold17v1PageModule {}
