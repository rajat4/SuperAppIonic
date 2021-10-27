import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold4PageRoutingModule } from './gold4-routing.module';

import { Gold4Page } from './gold4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold4PageRoutingModule
  ],
  declarations: [Gold4Page]
})
export class Gold4PageModule {}
