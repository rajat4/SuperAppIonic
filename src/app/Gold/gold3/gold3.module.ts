import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold3PageRoutingModule } from './gold3-routing.module';

import { Gold3Page } from './gold3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold3PageRoutingModule
  ],
  declarations: [Gold3Page]
})
export class Gold3PageModule {}
