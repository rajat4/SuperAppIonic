import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold6v1PageRoutingModule } from './gold6v1-routing.module';

import { Gold6v1Page } from './gold6v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold6v1PageRoutingModule
  ],
  declarations: [Gold6v1Page]
})
export class Gold6v1PageModule {}
