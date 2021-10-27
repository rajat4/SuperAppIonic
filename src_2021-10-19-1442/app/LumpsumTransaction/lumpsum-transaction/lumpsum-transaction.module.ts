import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LumpsumTransactionHeaderComponent } from 'src/app/LumpsumTransaction/lumpsum-transaction-header/lumpsum-transaction-header.component';

import { LumpsumTransactionRoutingModule } from './lumpsum-transaction-routing.module';

import { LumpsumTransactionComponent } from './lumpsum-transaction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LumpsumTransactionRoutingModule
  ],
  declarations: [LumpsumTransactionComponent, LumpsumTransactionHeaderComponent]
})
export class LumpsumTransactionModule {}
