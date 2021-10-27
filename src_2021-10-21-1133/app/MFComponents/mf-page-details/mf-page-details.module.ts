import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MfPageHeaderComponent } from 'src/app/MFComponents/mf-page-header/mf-page-header.component';

import { MfPageDetailsRoutingModule } from './mf-page-details.routing.module';

import { MfPageDetailsComponent } from './mf-page-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MfPageDetailsRoutingModule
  ],
  declarations: [MfPageDetailsComponent, MfPageHeaderComponent]
})
export class MfPageDetailsModule {}
