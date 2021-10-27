import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold2Page } from './gold2.page';

const routes: Routes = [
  {
    path: '',
    component: Gold2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold2PageRoutingModule {}
