import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthComponentRoutingModule } from './health-rounting-module';

import { HealthComponent } from './health.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthComponentRoutingModule
  ],
  declarations: [HealthComponent]
})
export class HealthComponentModule {}
