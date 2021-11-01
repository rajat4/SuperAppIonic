import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold17v1Page } from './gold17v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold17v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold17v1PageRoutingModule {}
