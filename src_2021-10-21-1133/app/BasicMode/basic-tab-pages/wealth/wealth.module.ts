import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WealthComponentRoutingModule } from './wealth-routing-module';

import { WealthComponent } from './wealth.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WealthComponentRoutingModule
  ],
  declarations: [WealthComponent]
})
export class WealthComponentModule {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

 
}
