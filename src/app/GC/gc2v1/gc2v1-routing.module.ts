import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gc2v1Page } from './gc2v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gc2v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gc2v1PageRoutingModule {}
