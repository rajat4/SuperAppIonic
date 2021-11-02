import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold12v1Page } from './gold12v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold12v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold12v1PageRoutingModule {}
