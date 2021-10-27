import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold3',
  templateUrl: './gold3.page.html',
  styleUrls: ['./gold3.page.scss'],
})
export class Gold3Page implements OnInit {
  public isMenuOpen: boolean = true;
  public isMenuSaverOpen: boolean = true;
  public isMenuInsurenceOpen: boolean = false;
  public isMenuInstantrOpen: boolean = false;
  public isMenuOtherOpen: boolean = true;
  public ArrowSign: boolean = false;
  public isSubMenuOpen: boolean = false;
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
    this.isMenuOpen = !this.isMenuOpen;
  }

  public toggleMenuSaver(){
    this.isMenuSaverOpen = !this.isMenuSaverOpen;
  }

  public toggleSubMenu(){
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  public toggleOtherMenu(){
    this.isMenuOtherOpen = !this.isMenuOtherOpen;
  }
}
