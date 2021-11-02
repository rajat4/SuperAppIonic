import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold1v1Page } from './gold1v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold1v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold1v1PageRoutingModule {}
