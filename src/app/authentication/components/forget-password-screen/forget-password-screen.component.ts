import { Component } from '@angular/core';
import { AuthStateService } from '../../auth-state.service';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { NavigationHistoryService } from '../../../services/navigation-history.service';

@Component({
  selector: 'app-forget-password-screen',
  templateUrl: './forget-password-screen.component.html',
  styleUrl: './forget-password-screen.component.css',
  standalone:true,
  imports:[FormsModule,NgIf],
})
export class ForgetPasswordScreenComponent {
  loading: boolean = false;
  EmailObj={
    "Email": ""
  }
  constructor(private authStateService: AuthStateService,private authservice: AuthService,private router: Router, private navHistory:NavigationHistoryService) {}

  navigateToSignup() {
    this.navHistory.vibrateClick()
    this.router.navigate(['/Login'], { queryParams: { signup: true } });
  }
  navigateToLogin() {
  this.navHistory.vibrateClick();
    this.router.navigate(['/Login'], { queryParams: { signup: false } });
  }
  // goToSignUp() {
  //   this.router.navigateByUrl('Login');
  //   this.authStateService.setSignInMode(false);  // Switch to Sign Up
    
  // }

  sendOtp(){
  this.navHistory.vibrateClick();
    this.EmailObj.Email = this.EmailObj.Email.trim();

    // Validate if email is provided
    if (!this.EmailObj.Email) {
      console.error('Email field is required!');
      alert('Please enter your email');
      return;
    }
    this.loading= true;
    this.authservice.getOtp(this.EmailObj.Email).subscribe((res:any)=>{
      console.log("otp send successfully")
      this.router.navigateByUrl('/Otp-forgot-password')
      this.loading= false;
      localStorage.setItem('email',this.EmailObj.Email)
    },error=>{
      console.log("OTP not sent")
      this.loading= false;
    })
  }
}
