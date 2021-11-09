import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToCartV1Page } from './add-to-cart-v1.page';

const routes: Routes = [
  {
    path: '',
    component: AddToCartV1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToCartV1PageRoutingModule {}
