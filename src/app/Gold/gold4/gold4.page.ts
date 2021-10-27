import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold4',
  templateUrl: './gold4.page.html',
  styleUrls: ['./gold4.page.scss'],
})
export class Gold4Page implements OnInit {

  public isMenuOpen: boolean = true;
  public ArrowSign: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  public toggleAccordion(id): void {
    if (id == 1) {
      this.ArrowSign = !this.ArrowSign;
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

}
