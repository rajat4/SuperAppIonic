import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LumpsumTransactionComponent } from './lumpsum-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: LumpsumTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LumpsumTransactionRoutingModule {}