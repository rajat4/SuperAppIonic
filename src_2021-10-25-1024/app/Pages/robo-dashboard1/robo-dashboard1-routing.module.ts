import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboDashboard1Page } from './robo-dashboard1.page';

const routes: Routes = [
  {
    path: '',
    component: RoboDashboard1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoboDashboard1PageRoutingModule {}
