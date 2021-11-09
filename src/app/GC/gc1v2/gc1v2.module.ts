import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GC1v2PageRoutingModule } from './gc1v2-routing.module';

import { GC1v2Page } from './gc1v2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GC1v2PageRoutingModule
  ],
  declarations: [GC1v2Page]
})
export class GC1v2PageModule {}
