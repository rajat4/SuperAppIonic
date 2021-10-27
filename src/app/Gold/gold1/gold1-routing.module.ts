import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold1Page } from './gold1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold1PageRoutingModule {}
