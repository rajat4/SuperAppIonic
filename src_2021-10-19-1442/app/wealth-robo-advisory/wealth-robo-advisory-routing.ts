import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WealthRoboAdvisoryComponent } from './wealth-robo-advisory.component';

const routes: Routes = [
  {
    path: '',
    component: WealthRoboAdvisoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WealthRoboAdvisoryRoutingModule {}
