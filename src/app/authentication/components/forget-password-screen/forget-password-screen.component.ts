import { Component } from '@angular/core';
import { AuthStateService } from '../../auth-state.service';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password-screen',
  templateUrl: './forget-password-screen.component.html',
  styleUrl: './forget-password-screen.component.css',
  standalone:true,
  imports:[FormsModule],
})
export class ForgetPasswordScreenComponent {
  EmailObj={
    "Email": ""
  }
  constructor(private authStateService: AuthStateService,private authservice: AuthService,private router: Router) {}

  goToSignUp() {
    this.authStateService.setSignInMode(false);  // Switch to Sign Up
  }

  sendOtp(){
    this.EmailObj.Email = this.EmailObj.Email.trim();

    // Validate if email is provided
    if (!this.EmailObj.Email) {
      console.error('Email field is required!');
      alert('Please enter your email');
      return;
    }
    this.authservice.getOtp(this.EmailObj.Email).subscribe((res:any)=>{
      console.log("otp send successfully")
      this.router.navigateByUrl('/Otp-forgot-password')
      localStorage.setItem('email',this.EmailObj.Email)
    },error=>{
      console.log("OTP not sent")
    })
  }
}
