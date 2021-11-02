import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold4v1PageRoutingModule } from './gold4v1-routing.module';

import { Gold4v1Page } from './gold4v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold4v1PageRoutingModule
  ],
  declarations: [Gold4v1Page]
})
export class Gold4v1PageModule {}
