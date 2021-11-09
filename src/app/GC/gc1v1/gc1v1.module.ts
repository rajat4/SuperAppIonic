import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GC1v1PageRoutingModule } from './gc1v1-routing.module';

import { GC1v1Page } from './gc1v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GC1v1PageRoutingModule
  ],
  declarations: [GC1v1Page]
})
export class GC1v1PageModule {}
