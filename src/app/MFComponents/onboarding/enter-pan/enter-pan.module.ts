import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterPANPageRoutingModule } from './enter-pan-routing.module';

import { EnterPANPage } from './enter-pan.page';
import { Header1Component } from 'src/app/Components/header1/header1.component';
import { Header2Component } from 'src/app/Components/header2/header2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterPANPageRoutingModule
  ],
  declarations: [EnterPANPage, Header1Component, Header2Component]
})
export class EnterPANPageModule {}
