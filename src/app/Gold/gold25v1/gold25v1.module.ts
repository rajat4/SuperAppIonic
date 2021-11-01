import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold25v1PageRoutingModule } from './gold25v1-routing.module';

import { Gold25v1Page } from './gold25v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold25v1PageRoutingModule
  ],
  declarations: [Gold25v1Page]
})
export class Gold25v1PageModule {}
