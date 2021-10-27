import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold4Page } from './gold4.page';

const routes: Routes = [
  {
    path: '',
    component: Gold4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold4PageRoutingModule {}
