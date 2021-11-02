import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold16v1Page } from './gold16v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold16v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold16v1PageRoutingModule {}
