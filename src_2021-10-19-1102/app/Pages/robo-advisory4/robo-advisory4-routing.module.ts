import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboAdvisory4Page } from './robo-advisory4.page';

const routes: Routes = [
  {
    path: '',
    component: RoboAdvisory4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoboAdvisory4PageRoutingModule {}
