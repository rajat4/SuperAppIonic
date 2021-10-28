import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rajat1Page } from './rajat1.page';

const routes: Routes = [
  {
    path: '',
    component: Rajat1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rajat1PageRoutingModule {}
