import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold3Page } from './gold3.page';

const routes: Routes = [
  {
    path: '',
    component: Gold3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold3PageRoutingModule {}
