import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { CarousalScreen1Component } from './components/carousal-screen-1/carousal-screen-1.component';
import { CarousalScreen2Component } from './components/carousal-screen-2/carousal-screen-2.component';

import { SignUpScreenComponent } from './components/sign-up-screen/sign-up-screen.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { ForgetPasswordScreenComponent } from './components/forget-password-screen/forget-password-screen.component';
import { CarousalScreen3Component } from './components/carousal-screen-3/carousal-screen-3.component';
import { OtpForgotPasswordComponent } from './components/otp-forgot-password/otp-forgot-password.component';
import { RestPasswordComponent } from './components/rest-password/rest-password.component';

const routes: Routes = [
  {
    path: '', 
    component: SplashScreenComponent
  },
  {
    path: 'Carousal-1',//Carousal-1
    component: CarousalScreen1Component
  },
  {
    path: 'Carousal-2',//Carousal-2
    component: CarousalScreen2Component
  },
  {
    path: 'Carousal-3',//Carousal-3
    component:  CarousalScreen3Component
  },
  {
    path: 'Login',
    component: LoginScreenComponent
  },
  {
    path: 'Sign-up',
    component: SignUpScreenComponent
  },
  {
    path: 'Forget-password',
    component: ForgetPasswordScreenComponent
  },
  {
    path: 'Otp-forgot-password',
    component: OtpForgotPasswordComponent
  },
  {
    path: 'Rest-password',
    component: RestPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
