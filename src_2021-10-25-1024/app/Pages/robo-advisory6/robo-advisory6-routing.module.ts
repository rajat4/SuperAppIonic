import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboAdvisory6Page } from './robo-advisory6.page';

const routes: Routes = [
  {
    path: '',
    component: RoboAdvisory6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoboAdvisory6PageRoutingModule {}
