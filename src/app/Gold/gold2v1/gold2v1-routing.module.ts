import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold2v1Page } from './gold2v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold2v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold2v1PageRoutingModule {}
