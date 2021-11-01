import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold18v1Page } from './gold18v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold18v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold18v1PageRoutingModule {}
