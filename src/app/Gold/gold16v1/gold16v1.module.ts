import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold16v1PageRoutingModule } from './gold16v1-routing.module';

import { Gold16v1Page } from './gold16v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold16v1PageRoutingModule
  ],
  declarations: [Gold16v1Page]
})
export class Gold16v1PageModule {}
