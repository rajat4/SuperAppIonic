import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold15v1PageRoutingModule } from './gold15v1-routing.module';

import { Gold15v1Page } from './gold15v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold15v1PageRoutingModule
  ],
  declarations: [Gold15v1Page]
})
export class Gold15v1PageModule {}
