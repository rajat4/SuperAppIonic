import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold10v1PageRoutingModule } from './gold10v1-routing.module';

import { Gold10v1Page } from './gold10v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold10v1PageRoutingModule
  ],
  declarations: [Gold10v1Page]
})
export class Gold10v1PageModule {}
