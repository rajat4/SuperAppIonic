import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold9v1Page } from './gold9v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold9v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold9v1PageRoutingModule {}
