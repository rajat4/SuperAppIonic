import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold6v3PageRoutingModule } from './gold6v3-routing.module';

import { Gold6v3Page } from './gold6v3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold6v3PageRoutingModule
  ],
  declarations: [Gold6v3Page]
})
export class Gold6v3PageModule {}
