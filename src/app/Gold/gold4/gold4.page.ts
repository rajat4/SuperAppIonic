import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold4',
  templateUrl: './gold4.page.html',
  styleUrls: ['./gold4.page.scss'],
})
export class Gold4Page implements OnInit {
  
  public isMenuOpen: boolean = false
  public isMenu1Open: boolean = false;
  public isMenu2Open: boolean = false;
  public isMenu3Open: boolean = false;
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

  public toggleAccordion1(id): void {
    if (id == 1) {
      this.ArrowSign = !this.ArrowSign;
    }
    this.isMenu1Open = !this.isMenu1Open;
  }

  public toggleAccordion2(id): void {
    if (id == 2) {
      this.ArrowSign = !this.ArrowSign;
    }
    this.isMenu2Open = !this.isMenu2Open;
  }

  public toggleAccordion3(id): void {
    if (id == 3) {
      this.ArrowSign = !this.ArrowSign;
    }
    this.isMenu3Open = !this.isMenu3Open;
  }
}
