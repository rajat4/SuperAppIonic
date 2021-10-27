import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MfFilterRoutingModule } from './mf-filter-routing.module';

import { MfFilterComponent } from './mf-filter.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MfFilterRoutingModule,
  ],
  declarations: [MfFilterComponent]
})
export class MfFilterModule {}
