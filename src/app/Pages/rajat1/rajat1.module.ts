import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rajat1PageRoutingModule } from './rajat1-routing.module';

import { Rajat1Page } from './rajat1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rajat1PageRoutingModule
  ],
  declarations: [Rajat1Page]
})
export class Rajat1PageModule {}
