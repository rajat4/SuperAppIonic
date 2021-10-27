import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoboAdvisory3Page } from './robo-advisory3.page';

const routes: Routes = [
  {
    path: '',
    component: RoboAdvisory3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoboAdvisory3PageRoutingModule {}
