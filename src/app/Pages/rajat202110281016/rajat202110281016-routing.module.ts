import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rajat202110281016Page } from './rajat202110281016.page';

const routes: Routes = [
  {
    path: '',
    component: Rajat202110281016Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rajat202110281016PageRoutingModule {}
