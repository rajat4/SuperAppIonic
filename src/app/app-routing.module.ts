import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'gold1v1',
    pathMatch: 'full'
  },
  {
    path: 'SignUp',
    loadChildren: () => import('./Pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'LoginWithPhone',
    loadChildren: () => import('./Pages/login-with-phone/login-with-phone.module').then( m => m.LoginWithPhonePageModule)
  },
  {
    path: 'SupperAppLanding',
    loadChildren: () => import('./Pages/supper-app-landing/supper-app-landing.module').then( m => m.SupperAppLandingPageModule)
  },
  {
    path: 'SplashScreen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'MarketingScreen',
    loadChildren: () => import('./pages/marketing-screen/marketing-screen.module').then( m => m.MarketingScreenPageModule)
  },
  {
    path: 'MfLanding',
    loadChildren: () => import('./MFComponents/mf-landing-with-kyc-not-transaction/mf-landing-with-kyc-not-transaction.module').then( m => m.MfLandingWithKYCNotTransactionModule)
  },
  {
    path: 'MfProductDetails',
    loadChildren: () => import('./MFComponents/mf-page-details/mf-page-details.module').then(m => m.MfPageDetailsModule)
  },
  {
    path: 'BasicMode',
    loadChildren: () => import('./BasicMode/basic-mode/basic-mode.module').then(m => m.BasicModeModule)
  },
  {
    path: 'BasicModeProductList',
    loadChildren: () => import('./BasicMode/product-list/product-list-module').then(m => m.ProductListModule)
  },
  {
    path: 'LumpsumTransaction',
    loadChildren: () => import('./LumpsumTransaction/lumpsum-transaction/lumpsum-transaction.module').then(m => m.LumpsumTransactionModule)
  },
  {
    path: 'MfFilter',
    loadChildren: () => import('./MFComponents/mf-filter/mf-filter.module').then(m => m.MfFilterModule)
  },
  {
    path: 'confirm-pan',
    loadChildren: () => import('./MFComponents/onboarding/confirm-pan/confirm-pan.module').then( m => m.ConfirmPanPageModule)
  },
  {
    path: 'enter-pan',
    loadChildren: () => import('./MFComponents/onboarding/enter-pan/enter-pan.module').then( m => m.EnterPANPageModule)
  },
  {
    path: 'WealthRoboAdvisory',
    loadChildren: () => import('./wealth-robo-advisory/wealth-robo-advisory.module').then( m => m.WealthRoboAdvisoryModule)
  },
  {
    path: 'Search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchModule)
  },
  {
    path: 'aadhaar',
    loadChildren: () => import('./MFComponents/onboarding/aadhaar/aadhaar.module').then( m => m.AadhaarPageModule)
  },
  {
    path: 'esign1',
    loadChildren: () => import('./MFComponents/onboarding/esign1/esign1.module').then( m => m.Esign1PageModule)
  },
  {
    path: 'esign2',
    loadChildren: () => import('./MFComponents/onboarding/esign2/esign2.module').then( m => m.Esign2PageModule)
  },
  {
    path: 'robo1',
    loadChildren: () => import('./Pages/robo-advisory1/robo-advisory1.module').then( m => m.RoboAdvisory1PageModule)
  },
  {
    path: 'robo2',
    loadChildren: () => import('./Pages/robo-advisory2/robo-advisory2.module').then( m => m.RoboAdvisory2PageModule)
  },
  {
    path: 'robo3',
    loadChildren: () => import('./Pages/robo-advisory3/robo-advisory3.module').then( m => m.RoboAdvisory3PageModule)
  },
  {
    path: 'robo4',
    loadChildren: () => import('./Pages/robo-advisory4/robo-advisory4.module').then( m => m.RoboAdvisory4PageModule)
  },
  {
    path: 'robo5',
    loadChildren: () => import('./Pages/robo-advisory5/robo-advisory5.module').then( m => m.RoboAdvisory5PageModule)
  },
  {
    path: 'robo6',
    loadChildren: () => import('./Pages/robo-advisory6/robo-advisory6.module').then( m => m.RoboAdvisory6PageModule)
  },
  {
    path: 'robo-home',
    loadChildren: () => import('./Pages/robo-dashboard1/robo-dashboard1.module').then( m => m.RoboDashboard1PageModule)
  },
  {
    path: 'bank1',
    loadChildren: () => import('./Pages/bank1/bank1.module').then( m => m.Bank1PageModule)
  },
  {
    path: 'bank2',
    loadChildren: () => import('./Pages/bank2/bank2.module').then( m => m.Bank2PageModule)
  },
  {
    path: 'bank3',
    loadChildren: () => import('./Pages/bank3/bank3.module').then( m => m.Bank3PageModule)
  },
  {
    path: 'bank4',
    loadChildren: () => import('./Pages/bank4/bank4.module').then( m => m.Bank4PageModule)
  },
  {
    path: 'gold1',
    loadChildren: () => import('./Gold/gold1/gold1.module').then( m => m.Gold1PageModule)
  },
  {
    path: 'gold2',
    loadChildren: () => import('./Gold/gold2/gold2.module').then( m => m.Gold2PageModule)
  },
  {
    path: 'gold3',
    loadChildren: () => import('./Gold/gold3/gold3.module').then( m => m.Gold3PageModule)
  },
  {
    path: 'gold4',
    loadChildren: () => import('./Gold/gold4/gold4.module').then( m => m.Gold4PageModule)
  },
  {
    path: 'rajat202110281016',
    loadChildren: () => import('./Pages/rajat202110281016/rajat202110281016.module').then( m => m.Rajat202110281016PageModule)
  },
  {
    path: 'rajat1',
    loadChildren: () => import('./Pages/rajat1/rajat1.module').then( m => m.Rajat1PageModule)
  },
  {
    path: 'gold17v1',
    loadChildren: () => import('./Gold/gold17v1/gold17v1.module').then( m => m.Gold17v1PageModule)
  },
  {
    path: 'gold19v1',
    loadChildren: () => import('./Gold/gold19v1/gold19v1.module').then( m => m.Gold19v1PageModule)
  },
  {
    path: 'gold18v1',
    loadChildren: () => import('./Gold/gold18v1/gold18v1.module').then( m => m.Gold18v1PageModule)
  },
  {
    path: 'gold25v1',
    loadChildren: () => import('./Gold/gold25v1/gold25v1.module').then( m => m.Gold25v1PageModule)
  },
  {
    path: 'gold1v1',
    loadChildren: () => import('./Gold/gold1v1/gold1v1.module').then( m => m.Gold1v1PageModule)
  },
  {
    path: 'gold2v1',
    loadChildren: () => import('./Gold/gold2v1/gold2v1.module').then( m => m.Gold2v1PageModule)
  },
  {
    path: 'gold3v1',
    loadChildren: () => import('./Gold/gold3v1/gold3v1.module').then( m => m.Gold3v1PageModule)
  },
  {
    path: 'gold4v1',
    loadChildren: () => import('./Gold/gold4v1/gold4v1.module').then( m => m.Gold4v1PageModule)
  },
  {
    path: 'gold5v1',
    loadChildren: () => import('./Gold/gold5v1/gold5v1.module').then( m => m.Gold5v1PageModule)
  },
  {
    path: 'gold6v1',
    loadChildren: () => import('./Gold/gold6v1/gold6v1.module').then( m => m.Gold6v1PageModule)
  },
  {
    path: 'gold7v1',
    loadChildren: () => import('./Gold/gold7v1/gold7v1.module').then( m => m.Gold7v1PageModule)
  },
  {
    path: 'gold8v1',
    loadChildren: () => import('./Gold/gold8v1/gold8v1.module').then( m => m.Gold8v1PageModule)
  },
  {
    path: 'gold9v1',
    loadChildren: () => import('./Gold/gold9v1/gold9v1.module').then( m => m.Gold9v1PageModule)
  },
  {
    path: 'gold10v1',
    loadChildren: () => import('./Gold/gold10v1/gold10v1.module').then( m => m.Gold10v1PageModule)
  },
  {
    path: 'gold11v1',
    loadChildren: () => import('./Gold/gold11v1/gold11v1.module').then( m => m.Gold11v1PageModule)
  },
  {
    path: 'gold12v1',
    loadChildren: () => import('./Gold/gold12v1/gold12v1.module').then( m => m.Gold12v1PageModule)
  },
  {
    path: 'gold13v1',
    loadChildren: () => import('./Gold/gold13v1/gold13v1.module').then( m => m.Gold13v1PageModule)
  },
  {
    path: 'gold14v1',
    loadChildren: () => import('./Gold/gold14v1/gold14v1.module').then( m => m.Gold14v1PageModule)
  },
  {
    path: 'gold15v1',
    loadChildren: () => import('./Gold/gold15v1/gold15v1.module').then( m => m.Gold15v1PageModule)
  },
  {
    path: 'gold16v1',
    loadChildren: () => import('./Gold/gold16v1/gold16v1.module').then( m => m.Gold16v1PageModule)
  },
  {
    path: 'gold15v2',
    loadChildren: () => import('./Gold/gold15v2/gold15v2.module').then( m => m.Gold15v2PageModule)
  },
  // {
  //   path: 'stepper',
  //   loadChildren: () => import('./Gold/stepper/stepper.module').then( m => m.StepperPageModule)
  // },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
