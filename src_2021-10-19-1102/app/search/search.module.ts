import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRoutingModule } from './search-routing.module';

import { SearchComponent } from './search.component';
import { SearchHeaderComponent } from './search-header/search-header.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchRoutingModule
  ],
  declarations: [SearchComponent, SearchHeaderComponent]
})
export class SearchModule {}
