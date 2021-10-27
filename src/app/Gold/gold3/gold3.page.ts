import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gold3',
  templateUrl: './gold3.page.html',
  styleUrls: ['./gold3.page.scss'],
})
export class Gold3Page implements OnInit {
  public isMenuOpen: boolean = false;
  public isMenuSaverOpen: boolean = false;
  public isMenuInsurenceOpen: boolean = false;
  public isMenuInstantrOpen: boolean = false;
  public isMenuOtherOpen: boolean = false;
  public ArrowSign: boolean = false;
  public isSubMenuOpen: boolean = false;
  public n: string ="chevron-forward-outline";
  constructor() { }

  ngOnInit() {
  }
  public name(n){
    setname(n);
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

  public toggleAccordion2(id): void {
    if (id == 2) {
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
function setname(n: any) {
  throw new Error('Function not implemented.');
}

