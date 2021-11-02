import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold7v1PageRoutingModule } from './gold7v1-routing.module';

import { Gold7v1Page } from './gold7v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold7v1PageRoutingModule
  ],
  declarations: [Gold7v1Page]
})
export class Gold7v1PageModule {}
