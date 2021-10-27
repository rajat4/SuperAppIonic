import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Esign2PageRoutingModule } from './esign2-routing.module';

import { Esign2Page } from './esign2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Esign2PageRoutingModule
  ],
  declarations: [Esign2Page]
})
export class Esign2PageModule {}
