import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold10v1Page } from './gold10v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold10v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold10v1PageRoutingModule {}
