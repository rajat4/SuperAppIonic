import { Component, OnInit, Input } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-header-cart-badge',
  templateUrl: './header-cart-badge.page.html',
  styleUrls: ['./header-cart-badge.page.scss'],
})
export class HeaderCartBadgePage implements OnInit {

  @Input('matBadge') badge: number;

  badgeCounter: number;

  constructor() {
    // this.badgeCounter = 0;
  }

  incrementCount() {
    this.badgeCounter++;
  }

  decreaseCount() {
    if(this.badgeCounter < 0)
     return;
    this.badgeCounter++;
  }

  resetCount() {
    this.badgeCounter = 0;
  }  

  ngOnInit() {
  }

}
