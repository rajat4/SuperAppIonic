import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bank3PageRoutingModule } from './bank3-routing.module';

import { Bank3Page } from './bank3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bank3PageRoutingModule
  ],
  declarations: [Bank3Page]
})
export class Bank3PageModule {}
