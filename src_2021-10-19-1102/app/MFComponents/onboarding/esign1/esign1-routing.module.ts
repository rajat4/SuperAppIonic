import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Esign1Page } from './esign1.page';

const routes: Routes = [
  {
    path: '',
    component: Esign1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Esign1PageRoutingModule {}
