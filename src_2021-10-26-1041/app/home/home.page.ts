import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('mySlider')  slides: IonSlides;
  
  constructor( private _router: Router) {}
 

  swipeNext(){
    this.slides.slideNext();
  }
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
  
  skip()
  {
    this._router.navigate(['../SignUp']);
  }
}
