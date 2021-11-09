import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold6v2Page } from './gold6v2.page';

const routes: Routes = [
  {
    path: '',
    component: Gold6v2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold6v2PageRoutingModule {}
