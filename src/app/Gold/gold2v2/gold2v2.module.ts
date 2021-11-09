import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold2v2PageRoutingModule } from './gold2v2-routing.module';

import { Gold2v2Page } from './gold2v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold2v2PageRoutingModule
  ],
  declarations: [Gold2v2Page]
})
export class Gold2v2PageModule {}
