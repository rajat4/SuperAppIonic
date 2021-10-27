import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bank4PageRoutingModule } from './bank4-routing.module';

import { Bank4Page } from './bank4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bank4PageRoutingModule
  ],
  declarations: [Bank4Page]
})
export class Bank4PageModule {}
