import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold15v2PageRoutingModule } from './gold15v2-routing.module';

import { Gold15v2Page } from './gold15v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold15v2PageRoutingModule
  ],
  declarations: [Gold15v2Page]
})
export class Gold15v2PageModule {}
