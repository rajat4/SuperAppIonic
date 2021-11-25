import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gc2v2PageRoutingModule } from './gc2v2-routing.module';

import { Gc2v2Page } from './gc2v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gc2v2PageRoutingModule
  ],
  declarations: [Gc2v2Page]
})
export class Gc2v2PageModule {}
