import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GC1v2Page } from './gc1v2.page';

const routes: Routes = [
  {
    path: '',
    component: GC1v2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GC1v2PageRoutingModule {}
