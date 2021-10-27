import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifestyleComponentRoutingModule } from './lifestyle-rounting-module';

import { LifestyleComponent } from './lifestyle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifestyleComponentRoutingModule
  ],
  declarations: [LifestyleComponent]
})
export class LifestyleComponentModule {}
