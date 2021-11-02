import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold8v1Page } from './gold8v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold8v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold8v1PageRoutingModule {}
