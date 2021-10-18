import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicModeRoutingModule } from './basic-mode-routing.module';

import { BasicModeComponent } from './basic-mode.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/Components/header/header.component';
import { LongPressModule } from 'ionic-long-press';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LongPressModule,
    BasicModeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BasicModeComponent, HeaderComponent]
})
export class BasicModeModule {}
