import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginWithPhonePageRoutingModule } from './login-with-phone-routing.module';

import { LoginWithPhonePage } from './login-with-phone.page';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginWithPhonePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginWithPhonePage]
})
export class LoginWithPhonePageModule {}
