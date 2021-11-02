import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold15v1Page } from './gold15v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold15v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold15v1PageRoutingModule {}
