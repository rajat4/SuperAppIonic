import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mf-filter',
  templateUrl: './mf-filter.component.html',
  styleUrls: ['./mf-filter.component.scss'],
})
export class MfFilterComponent implements OnInit {

  amcState: boolean = true;
  categoryState: boolean = false;

  constructor(public toastController: ToastController) { }

  ngOnInit() { }

  async btnClear() {
    const toast = await this.toastController.create({
      message: 'Filter Cleared..!',
      duration: 2000
    });
    toast.present();
  }

  filterItem(filterBy) {
    if (filterBy == "AMC") {
      this.amcState = true;
      this.categoryState = false;
    }
    else if (filterBy == "Category") {
      this.categoryState = true;
      this.amcState = false;
    } else{
      this.categoryState = false;
      this.amcState = false;
    }
  }
}
