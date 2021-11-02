import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold3v1Page } from './gold3v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold3v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold3v1PageRoutingModule {}
