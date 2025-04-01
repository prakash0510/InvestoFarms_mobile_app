import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-forgot-password',
  templateUrl: './otp-forgot-password.component.html',
  styleUrl: './otp-forgot-password.component.css',
  standalone:true,
  imports:[FormsModule],
})
export class OtpForgotPasswordComponent {
  otp: string[] = ['', '', '', '', '', ''];
  email=localStorage.getItem('email')

  @ViewChild('otp1') otp1!: ElementRef;
  @ViewChild('otp2') otp2!: ElementRef;
  @ViewChild('otp3') otp3!: ElementRef;
  @ViewChild('otp4') otp4!: ElementRef;
  @ViewChild('otp5') otp5!: ElementRef;
  @ViewChild('otp6') otp6!: ElementRef;

  otpRefs: any;

  constructor(private authservice: AuthService,private router:Router) {}

  ngAfterViewInit() {
    this.otpRefs = [this.otp1, this.otp2, this.otp3, this.otp4, this.otp5, this.otp6];
  }

  moveCursor(event: any, index: number) {
    if (event.target.value && index < this.otp.length) {
      this.otpRefs[index]?.nativeElement.focus();
    }
  }

  handleBackspace(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.otp[index] && index > 0) {
      this.otpRefs[index - 1]?.nativeElement.focus();
    }
  }

  submitOtp() {
    const otpValue = this.otp.join('');
    if (otpValue.length < 6) {
      console.log('Please enter a complete OTP');
      return;
    }

    console.log('Entered OTP:', otpValue);
    this.authservice.verifyOtp(this.email??'', otpValue).subscribe(
      (res: any) => {
        console.log('OTP verified successfully');
        this.router.navigateByUrl("Rest-password")
      },
      (error) => {
        console.error('OTP verification failed', error);
      }
    );
  }

  resendOtp() {
    console.log('Resending OTP...');

    // Call your API to resend OTP
  }

  forgetPassword(){
    this.router.navigateByUrl("/Forget-password")
  }
}