import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold2v1PageRoutingModule } from './gold2v1-routing.module';

import { Gold2v1Page } from './gold2v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold2v1PageRoutingModule
  ],
  declarations: [Gold2v1Page]
})
export class Gold2v1PageModule {}
