import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold1v1PageRoutingModule } from './gold1v1-routing.module';

import { Gold1v1Page } from './gold1v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold1v1PageRoutingModule
  ],
  declarations: [Gold1v1Page]
})
export class Gold1v1PageModule {}
