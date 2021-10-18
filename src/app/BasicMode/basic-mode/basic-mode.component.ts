import { Component, OnInit } from '@angular/core';
import { DynamicTempleteService } from 'src/app/Services/dynamic-templete.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

import { ActionSheetController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-basic-mode',
  templateUrl: './basic-mode.component.html',
  styleUrls: ['./basic-mode.component.scss'],
})
export class BasicModeComponent implements OnInit {

  showModal: boolean = true;
  showInteractiveModal: boolean = false;
  showFab: boolean = false;

  filterTabs: any;

  segmentModel = "";

  testData: any;
  expFund: any;

  fabClickState = "";

  interactiveState: boolean = false;
  audioPlay: boolean = false;
  runGif: boolean = false;

  isVisible: boolean = false;

  languageType: String = "en";
  myLabels: any;

  constructor(private _dynamicData: DynamicTempleteService,
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
    private _router: Router,
    private modalController: ModalController,
    private animationCtrl: AnimationController) {
    this.GetDynamicData()
  }

  ngOnInit() {

    setTimeout(() => {
      this.interactiveState = true;

      const cartAnimation = this.animationCtrl.create('cart-animation')
        .addElement(document.getElementById('myFab'))
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.2)' },
          { offset: 0.8, transform: 'scale(0.9)' },
          { offset: 1, transform: 'scale(1)' }
        ]);

      const cartColorAnimation = this.animationCtrl.create('cart-color-animation')
        .addElement(document.getElementById('myFab'))
        .fromTo('transform', 'rotate(0deg)', 'rotate(45deg)');
      // .duration(1500)
      // .iterations(2)
      // .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      // .fromTo('opacity', '1', '0.2');

      const parent = this.animationCtrl.create('parent')
        .duration(1000)
        .easing('ease-out')
        .iterations(15)
        .direction('alternate')
        .addAnimation([cartAnimation]);

      // Playing the parent starts both animations
      parent.play();

      interactiveEnable();
    }, 3000);  //3s

    function interactiveEnable() {
      setTimeout(() => {
        this.interactiveState = false;
      }, 1000);
    }
  }

  GetDynamicData() {
    this._dynamicData.GetBasicModeLabels(this.languageType).subscribe(data => {
      if (data) {
        this.myLabels = data;
      }
    });

    if (this.languageType == "en") {
      this.languageType = "hn"
    } else {
      this.languageType = "en"
    }

    this._dynamicData.GetBasicMOdeDetails().subscribe(data => {
      if (data) {
        // console.log("data from service" + data[0].templateName)
        // this.segmentModel = data.filterTab[0];
        this.filterTabs = data.filterTab;
        this.expFund = data.exploreFunds;
      }
    });

   
  }

  async categoryChanged(selectedTab) {
    // const toast = await this.toastController.create({
    //   message: 'You have selected ' + this.segmentModel,
    //   duration: 2000
    // });
    // toast.present();

    if (this.segmentModel == "Mutual Fund") {
      this.segmentModel = ""
      this._router.navigate(['./BasicModeProductList']);
    } else {
      const toast = await this.toastController.create({
        message: 'Development in progress ' + this.segmentModel,
        duration: 2000
      });
      toast.present();
    }
  }

  navigateToAddToCart() {
    this._router.navigate(['./MfProductDetails']);
  }

  async fabClick() {
    // fabClickState
    this.showFab = false;
    this.runGif = false;
    if (this.interactiveState) {
      this.interactiveState = false;
      this.isVisible = true;

      const enterAnimation = (baseEl: any) => {
        const backdropAnimation = this.animationCtrl.create()
          // .addElement(baseEl.querySelector('ion-backdrop')!)
          .addElement(baseEl.querySelector('testAnim')!)
          .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

        const wrapperAnimation = this.animationCtrl.create()
          .addElement(baseEl.querySelector('.modal-wrapper')!)
          .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' }
          ]);

        return this.animationCtrl.create()
          .addElement(baseEl)
          .easing('ease-out')
          .duration(500)
          .addAnimation([backdropAnimation, wrapperAnimation]);
      }

      const leaveAnimation = (baseEl: any) => {
        return enterAnimation(baseEl).direction('reverse');
      }

      // const modal = await this.modalController.create({
      //   component: ModalPage,
      //   enterAnimation,
      //   leaveAnimation
      // });

      // return await modal.present();

      const backdropAnimation = this.animationCtrl.create()
        // .addElement(baseEl.querySelector('ion-backdrop')!)
        .addElement(document.getElementById('interactiveModel')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        // .addElement(baseEl.querySelector('.modal-wrapper')!)
        .addElement(document.getElementById('interactiveModel')!)
        .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
      // .keyframes([
      //   { offset: 0, opacity: '0', transform: 'scale(0)' },
      //   { offset: 1, opacity: '0.99', transform: 'scale(1)' }
      // ]
      // );

      const interactiveStart = this.animationCtrl.create()
        // .addElement(document.getElementById('interactiveModel'))
        .easing('ease-out')
        .duration(1000)
        .addAnimation([backdropAnimation, wrapperAnimation]);

      interactiveStart.play();

      this.showInteractiveModal = true;

    } else {
      this.interactiveState = false;
      this.showInteractiveModal = false;
      this.showFab = true;
      this._router.navigate(['../SupperAppLanding']);
    }
  }

  async pressed() {
    // const toast = await this.toastController.create({
    //   message: 'pressed',
    //   duration: 2000
    // });
    // toast.present();
  }

  async active() {
    this.runGif = true;
    this.audioPlay = true;
    this.interactiveState = false;
    this.showFab = false;
    const toast = await this.toastController.create({
      message: 'We are listening to you...',
      duration: 2000
    });
    toast.present();
  }

  async released() {
    // const toast = await this.toastController.create({
    //   message: 'Your voice recorded successfully..!',
    //   duration: 2000
    // });
    // toast.present();
    this.audioPlay = false;
    // this.runGif = false;
  }

  close() {
    this.showModal = false;
    this.showFab = true;
    this.runGif = false;
    this.interactiveState = false;
  }

  async closeInteractiveModal() {
    const enterAnimation = (baseEl: any) => {
      const backdropAnimation = this.animationCtrl.create()
        // .addElement(baseEl.querySelector('ion-backdrop')!)
        .addElement(baseEl.querySelector('interactiveModel')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

      const wrapperAnimation = this.animationCtrl.create()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'scale(0)' },
          { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

      return this.animationCtrl.create()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    }

    const leaveAnimation = (baseEl: any) => {
      return enterAnimation(baseEl).direction('reverse');
    }

    // const modal = await this.modalController.create({
    //   component: ModalPage,
    //   enterAnimation,
    //   leaveAnimation
    // });

    const backdropAnimation = this.animationCtrl.create()
      // .addElement(baseEl.querySelector('ion-backdrop')!)
      .addElement(document.getElementById('interactiveModel')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl.create()
      // .addElement(baseEl.querySelector('.modal-wrapper')!)
      .addElement(document.getElementById('interactiveModel')!)
      .fromTo('transform', 'translateY(100px)', 'translateY(0px)')
    // .keyframes([
    //   { offset: 0, opacity: '0', transform: 'scale(0)' },
    //   { offset: 1, opacity: '0.99', transform: 'scale(1)' }
    // ]
    // );

    const interactiveReverse = this.animationCtrl.create()
      // .addElement(document.getElementById('interactiveModel'))
      .easing('ease-out')
      .duration(1000)
      .addAnimation([backdropAnimation.direction('reverse'), wrapperAnimation.direction('reverse')]);

    interactiveReverse.play();

    this.interactiveState = false;
    this.runGif = false;
    // this.showInteractiveModal = false;    
    this.showFab = true;

    
    setTimeout(() => {
      this.interactiveState = false;
      this.isVisible = false;
    }, 1000);
  }

  async openInteractiveAdd() {
    this.showInteractiveModal = false;
    this.runGif = false;
    this.interactiveState = false;
    this.showFab = true;
    const toast = await this.toastController.create({
      message: 'Thank you...!',
      duration: 2000
    });
    toast.present();

    this.closeInteractiveModal()
  }
}
