import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold14v1PageRoutingModule } from './gold14v1-routing.module';

import { Gold14v1Page } from './gold14v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold14v1PageRoutingModule
  ],
  declarations: [Gold14v1Page]
})
export class Gold14v1PageModule {}
