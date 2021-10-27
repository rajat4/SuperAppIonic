import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WealthComponent } from './wealth.component';

const routes: Routes = [
  {
    path: '',
    component: WealthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WealthComponentRoutingModule {}