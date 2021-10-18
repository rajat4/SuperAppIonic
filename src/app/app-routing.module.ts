import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'MarketingScreen',
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
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
