import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bank4Page } from './bank4.page';

const routes: Routes = [
  {
    path: '',
    component: Bank4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bank4PageRoutingModule {}
