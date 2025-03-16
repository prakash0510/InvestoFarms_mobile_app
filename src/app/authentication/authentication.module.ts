import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { CarousalScreen1Component } from './components/carousal-screen-1/carousal-screen-1.component';
import { CarousalScreen2Component } from './components/carousal-screen-2/carousal-screen-2.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { SignUpScreenComponent } from './components/sign-up-screen/sign-up-screen.component';
import { ForgetPasswordScreenComponent } from './components/forget-password-screen/forget-password-screen.component';
import { CarousalScreen3Component } from './components/carousal-screen-3/carousal-screen-3.component';
import { OtpForgotPasswordComponent } from './components/otp-forgot-password/otp-forgot-password.component';
import { RestPasswordComponent } from './components/rest-password/rest-password.component';


@NgModule({
  declarations: [
    SplashScreenComponent,
    CarousalScreen1Component,
    CarousalScreen2Component,
    SignUpScreenComponent,
    ForgetPasswordScreenComponent,
    CarousalScreen3Component,
    OtpForgotPasswordComponent,
    RestPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
