import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold1PageRoutingModule } from './gold1-routing.module';

import { Gold1Page } from './gold1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold1PageRoutingModule
  ],
  declarations: [Gold1Page]
})
export class Gold1PageModule {}
