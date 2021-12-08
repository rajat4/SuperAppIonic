import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderCartBadgePageRoutingModule } from './header-cart-badge-routing.module';

import { HeaderCartBadgePage } from './header-cart-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderCartBadgePageRoutingModule
  ],
  declarations: [HeaderCartBadgePage]
})
export class HeaderCartBadgePageModule {}
