import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold15v2Page } from './gold15v2.page';

const routes: Routes = [
  {
    path: '',
    component: Gold15v2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold15v2PageRoutingModule {}
