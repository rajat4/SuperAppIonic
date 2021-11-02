import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold4v1Page } from './gold4v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold4v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold4v1PageRoutingModule {}
