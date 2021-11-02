import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold9v1PageRoutingModule } from './gold9v1-routing.module';

import { Gold9v1Page } from './gold9v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold9v1PageRoutingModule
  ],
  declarations: [Gold9v1Page]
})
export class Gold9v1PageModule {}
