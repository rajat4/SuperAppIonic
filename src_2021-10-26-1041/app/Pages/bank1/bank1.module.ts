import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bank1PageRoutingModule } from './bank1-routing.module';

import { Bank1Page } from './bank1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bank1PageRoutingModule
  ],
  declarations: [Bank1Page]
})
export class Bank1PageModule {}
