import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmPanPage } from './confirm-pan.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmPanPageRoutingModule {}
