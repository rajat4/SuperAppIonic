import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationComponentRoutingModule } from './education-rounting-module';

import { EducationComponent } from './education.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationComponentRoutingModule
  ],
  declarations: [EducationComponent]
})
export class EducationComponentModule {}
