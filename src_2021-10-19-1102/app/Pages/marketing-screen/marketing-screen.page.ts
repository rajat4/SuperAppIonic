import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';

@Component({
  selector: 'app-marketing-screen',
  templateUrl: './marketing-screen.page.html',
  styleUrls: ['./marketing-screen.page.scss'],
})
export class MarketingScreenPage implements OnInit {
  MarketingScreen: boolean = false;
  MarketingScreenNumber: number = 0;
  screen: any;
  color: string;
  languageType: String = "en";

  @ViewChild('mySlider', { static: false }) slides: IonSlides;

  constructor(private _router: Router, private _dynamicData: DynamicTempleteService) {
    this.GetDynamicData()
  }

  ngOnInit() {
  }

  swipeNext(slides, pos) {
    this.slides.slideNext();
    // alert("swipe " + slides)
    // if(pos == this.screen.length-1){
    //   this._router.navigate(['../SignUp']);
    // } else{
    //   slides.slideNext();
    // }

    // this.slides.slideTo(2, 3);
  }
  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }
  skip() {
    this._router.navigate(['../SignUp']);
  }

  GetDynamicData() {
    // this._dynamicData.GetDynamicHealthData().subscribe(data => {
    //   if (data) {
    //     console.log("data from service" + data[1].templateName)
    //     if(data[1].templateName != "" && data[1].templateName == "MarketingScreen"){
    //       this.MarketingScreen = true;
    //       this.MarketingScreenNumber = data[1].MarketingScreenNumber;
    //       console.log(this.MarketingScreenNumber)
    //       this.screen = data[1].screen;
    //       console.log(this.screen.length);
    //     }
    //   }
    // });

    this._dynamicData.GetMarketingScreen(this.languageType).subscribe(data => {
      if (data) {
        console.log("data from service" + data.templateName)
        if (data.templateName != "" && data.templateName == "MarketingScreen") {
          this.MarketingScreen = true;
          this.MarketingScreenNumber = data.MarketingScreenNumber;
          console.log(this.MarketingScreenNumber)
          this.screen = data.screen;
          console.log(this.screen.length);
        }
      }
    });

    if (this.languageType == "en") {
      this.languageType = "hn"
    } else {
      this.languageType = "en"
    }
  }

}
