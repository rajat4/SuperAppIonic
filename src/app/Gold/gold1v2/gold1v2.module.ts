import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold1v2PageRoutingModule } from './gold1v2-routing.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { Gold1v2Page } from './gold1v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold1v2PageRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [Gold1v2Page]
})
export class Gold1v2PageModule {}
