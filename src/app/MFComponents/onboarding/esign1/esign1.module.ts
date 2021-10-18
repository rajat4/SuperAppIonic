import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Esign1PageRoutingModule } from './esign1-routing.module';

import { Esign1Page } from './esign1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Esign1PageRoutingModule
  ],
  declarations: [Esign1Page]
})
export class Esign1PageModule {}
