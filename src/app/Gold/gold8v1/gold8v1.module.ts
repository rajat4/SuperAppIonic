import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold8v1PageRoutingModule } from './gold8v1-routing.module';

import { Gold8v1Page } from './gold8v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold8v1PageRoutingModule
  ],
  declarations: [Gold8v1Page]
})
export class Gold8v1PageModule {}
