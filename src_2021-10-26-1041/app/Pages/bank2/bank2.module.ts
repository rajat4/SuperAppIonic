import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bank2PageRoutingModule } from './bank2-routing.module';

import { Bank2Page } from './bank2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bank2PageRoutingModule
  ],
  declarations: [Bank2Page]
})
export class Bank2PageModule {}
