import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold6v2PageRoutingModule } from './gold6v2-routing.module';

import { Gold6v2Page } from './gold6v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold6v2PageRoutingModule
  ],
  declarations: [Gold6v2Page]
})
export class Gold6v2PageModule {}
