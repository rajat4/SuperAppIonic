import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold3v1PageRoutingModule } from './gold3v1-routing.module';

import { Gold3v1Page } from './gold3v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold3v1PageRoutingModule
  ],
  declarations: [Gold3v1Page]
})
export class Gold3v1PageModule {}
