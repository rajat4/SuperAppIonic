import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold1v2Page } from './gold1v2.page';

const routes: Routes = [
  {
    path: '',
    component: Gold1v2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold1v2PageRoutingModule {}
