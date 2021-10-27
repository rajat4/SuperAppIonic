import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gold1',
  templateUrl: './gold1.page.html',
  styleUrls: ['./gold1.page.scss'],
})
export class Gold1Page implements OnInit {
  public isMenuOpen: boolean = true;
  public isMenuSaverOpen: boolean = true;
  public isMenuInsurenceOpen: boolean = false;
  public isMenuInstantrOpen: boolean = false;
  public isMenuOtherOpen: boolean = true;
  public ArrowSign: boolean = false;
  public isSubMenuOpen: boolean = false;

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  public toggleAccordion(id): void {
    if (id == 1) {
      this.ArrowSign = !this.ArrowSign;
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

}
