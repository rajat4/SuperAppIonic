import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold5v1Page } from './gold5v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold5v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold5v1PageRoutingModule {}
