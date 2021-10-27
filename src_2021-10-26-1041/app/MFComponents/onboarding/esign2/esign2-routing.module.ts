import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Esign2Page } from './esign2.page';

const routes: Routes = [
  {
    path: '',
    component: Esign2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Esign2PageRoutingModule {}
