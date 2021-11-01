import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold19v1Page } from './gold19v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold19v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold19v1PageRoutingModule {}
