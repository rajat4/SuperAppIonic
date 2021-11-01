import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold25v1Page } from './gold25v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold25v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold25v1PageRoutingModule {}
