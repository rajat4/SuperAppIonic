import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gold11v1PageRoutingModule } from './gold11v1-routing.module';

import { Gold11v1Page } from './gold11v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gold11v1PageRoutingModule
  ],
  declarations: [Gold11v1Page]
})
export class Gold11v1PageModule {}
