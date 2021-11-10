import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gc2v1PageRoutingModule } from './gc2v1-routing.module';

import { Gc2v1Page } from './gc2v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gc2v1PageRoutingModule
  ],
  declarations: [Gc2v1Page]
})
export class Gc2v1PageModule {}
