import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold2PageRoutingModule } from './gold2-routing.module';

import { Gold2Page } from './gold2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold2PageRoutingModule
  ],
  declarations: [Gold2Page]
})
export class Gold2PageModule {}
