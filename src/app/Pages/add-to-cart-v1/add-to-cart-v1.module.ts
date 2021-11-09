import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddToCartV1PageRoutingModule } from './add-to-cart-v1-routing.module';

import { AddToCartV1Page } from './add-to-cart-v1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddToCartV1PageRoutingModule
  ],
  declarations: [AddToCartV1Page]
})
export class AddToCartV1PageModule {}
