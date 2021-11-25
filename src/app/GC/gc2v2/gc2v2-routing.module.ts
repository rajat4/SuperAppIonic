import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gc2v2Page } from './gc2v2.page';

const routes: Routes = [
  {
    path: '',
    component: Gc2v2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gc2v2PageRoutingModule {}
