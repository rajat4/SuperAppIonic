import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboAdvisory5Page } from './robo-advisory5.page';

const routes: Routes = [
  {
    path: '',
    component: RoboAdvisory5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoboAdvisory5PageRoutingModule {}
