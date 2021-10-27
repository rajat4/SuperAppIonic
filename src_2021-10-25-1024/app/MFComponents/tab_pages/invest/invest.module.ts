import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MfHeaderComponent } from 'src/app/MFComponents/mf-header/mf-header.component';
import { InvestPageRoutingModule } from './invest-routing.module';

import { InvestPage } from './invest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestPageRoutingModule
  ],
  declarations: [InvestPage, MfHeaderComponent]
})
export class InvestPageModule {}
