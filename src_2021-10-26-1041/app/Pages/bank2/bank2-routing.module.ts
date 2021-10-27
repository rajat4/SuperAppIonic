import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bank2Page } from './bank2.page';

const routes: Routes = [
  {
    path: '',
    component: Bank2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bank2PageRoutingModule {}
