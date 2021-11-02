import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold13v1Page } from './gold13v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold13v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold13v1PageRoutingModule {}
