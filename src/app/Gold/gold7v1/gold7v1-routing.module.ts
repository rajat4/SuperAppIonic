import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold7v1Page } from './gold7v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold7v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold7v1PageRoutingModule {}
