import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold18v1PageRoutingModule } from './gold18v1-routing.module';

import { Gold18v1Page } from './gold18v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold18v1PageRoutingModule
  ],
  declarations: [Gold18v1Page]
})
export class Gold18v1PageModule {}
