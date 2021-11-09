import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold6v3Page } from './gold6v3.page';

const routes: Routes = [
  {
    path: '',
    component: Gold6v3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold6v3PageRoutingModule {}
