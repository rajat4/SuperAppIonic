import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold13v1PageRoutingModule } from './gold13v1-routing.module';

import { Gold13v1Page } from './gold13v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold13v1PageRoutingModule
  ],
  declarations: [Gold13v1Page]
})
export class Gold13v1PageModule {}
