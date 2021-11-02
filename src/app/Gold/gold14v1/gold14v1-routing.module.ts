import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold14v1Page } from './gold14v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold14v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold14v1PageRoutingModule {}
