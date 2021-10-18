import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MfPageDetailsComponent } from './mf-page-details.component';

const routes: Routes = [
  {
    path: '',
    component: MfPageDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfPageDetailsRoutingModule {}