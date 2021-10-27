import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPanPageRoutingModule } from './confirm-pan-routing.module';

import { ConfirmPanPage } from './confirm-pan.page';

import { Header1Component } from 'src/app/Components/header1/header1.component';
import { Header2Component } from 'src/app/Components/header2/header2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmPanPageRoutingModule,
    
  ],
  declarations: [ConfirmPanPage]
})
export class ConfirmPanPageModule {}
