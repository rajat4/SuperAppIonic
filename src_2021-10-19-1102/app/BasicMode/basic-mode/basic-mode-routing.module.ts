import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicModeComponent } from './basic-mode.component';

const routes: Routes = [
  {
    path: '',
    component: BasicModeComponent,
    children: [
      {
        path: 'wealth',
        loadChildren: () => import('../basic-tab-pages/wealth/wealth.module').then(m => m.WealthComponentModule)
      },{
        path: 'health',
        loadChildren: () => import('../basic-tab-pages/health/health-module').then(m => m.HealthComponentModule)
      },{
        path: 'education',
        loadChildren: () => import('../basic-tab-pages/education/education-module').then(m => m.EducationComponentModule)
      },{
        path: 'lifestyle',
        loadChildren: () => import('../basic-tab-pages/lifestyle/lifestyle-module').then(m => m.LifestyleComponentModule)
      },
      {
        path: '',
        redirectTo: '/BasicMode/wealth',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/BasicMode/wealth',
    pathMatch: 'full'
  }
];

@NgModule({
 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BasicModeRoutingModule {}
