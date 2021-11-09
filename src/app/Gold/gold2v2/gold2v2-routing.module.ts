import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold2v2Page } from './gold2v2.page';

const routes: Routes = [
  {
    path: '',
    component: Gold2v2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold2v2PageRoutingModule {}
