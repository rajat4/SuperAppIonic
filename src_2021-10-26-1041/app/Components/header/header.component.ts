import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public isMenuOpen: boolean = true;
  public isMenuSaverOpen: boolean = true;
  public isMenuInsurenceOpen: boolean = false;
  public isMenuInstantrOpen: boolean = false;
  public isMenuOtherOpen: boolean = true;
  public ArrowSign: boolean = false;
  public isSubMenuOpen: boolean = false;

  constructor(private menu: MenuController) {}

  ngOnInit() {
    if(this.menu.isEnabled){
      this.menu.close();
    }
  }

  openMenu() {
    // this.menu.enable(true, 'first');
    // if(this.menu.isEnabled){
    //   this.menu.open()
    // }
    this.menu.open()
    console.log("menu clicked")
  }

  closeMenu() {
    // this.menu.open('end');
    this.menu.close()
  }

  public toggleAccordion(id): void {
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
