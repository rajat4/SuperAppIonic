import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bank1Page } from './bank1.page';

const routes: Routes = [
  {
    path: '',
    component: Bank1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bank1PageRoutingModule {}
