import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold19v1PageRoutingModule } from './gold19v1-routing.module';

import { Gold19v1Page } from './gold19v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold19v1PageRoutingModule
  ],
  declarations: [Gold19v1Page]
})
export class Gold19v1PageModule {}
