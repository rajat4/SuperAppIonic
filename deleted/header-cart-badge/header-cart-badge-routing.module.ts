import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderCartBadgePage } from './header-cart-badge.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderCartBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderCartBadgePageRoutingModule {}
