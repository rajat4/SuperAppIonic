import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gold11v1Page } from './gold11v1.page';

const routes: Routes = [
  {
    path: '',
    component: Gold11v1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gold11v1PageRoutingModule {}
