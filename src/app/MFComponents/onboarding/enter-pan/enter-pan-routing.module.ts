import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterPANPage } from './enter-pan.page';

const routes: Routes = [
  {
    path: '',
    component: EnterPANPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterPANPageRoutingModule {}
