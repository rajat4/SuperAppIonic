import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold6v1Page } from './gold6v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold6v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold6v1PageRoutingModule {}
