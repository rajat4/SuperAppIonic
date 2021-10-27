import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketingScreenPage } from './marketing-screen.page';

const routes: Routes = [
  {
    path: '',
    component: MarketingScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingScreenPageRoutingModule {}
