import { Component, ElementRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NavigationHistoryService } from '../../../services/navigation-history.service';

@Component({
  selector: 'app-otp-forgot-password',
  templateUrl: './otp-forgot-password.component.html',
  styleUrl: './otp-forgot-password.component.css',
  standalone:true,
  imports:[FormsModule,NgIf],
  encapsulation: ViewEncapsulation.None,
})
export class OtpForgotPasswordComponent {
  loading: boolean = false;
  otp: string[] = ['', '', '', '', '', ''];
  email=localStorage.getItem('email')

  @ViewChild('otp1') otp1!: ElementRef;
  @ViewChild('otp2') otp2!: ElementRef;
  @ViewChild('otp3') otp3!: ElementRef;
  @ViewChild('otp4') otp4!: ElementRef;
  @ViewChild('otp5') otp5!: ElementRef;
  @ViewChild('otp6') otp6!: ElementRef;

  otpRefs: any;

  constructor(private authservice: AuthService,private router:Router,private toastr: ToastrService, private navHistory:NavigationHistoryService) {}

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
  this.navHistory.vibrateClick();
    const otpValue = this.otp.join('');
    if (otpValue.length < 6) {
      console.log('Please enter a complete OTP');
      this.toastr.warning("Enter OTP")
      return;
    }

    console.log('Entered OTP:', otpValue);
    this.loading= true;
    this.authservice.verifyOtp(this.email??'', otpValue).subscribe(
      (res: any) => {
        console.log('OTP verified successfully');
        this.router.navigateByUrl("Rest-password")
        this.toastr.success("OTP verified!")
        this.loading= false;
      },
      (error) => {
        console.error('OTP verification failed', error);
        this.loading= false;


      }
    );
  }

  resendOtp() {
  this.navHistory.vibrateClick();
    this.authservice.getOtp(this.email??'').subscribe((res:any)=>{

      console.log('Resending OTP...');
    })
    ;

    // Call your API to resend OTP
  }

  forgetPassword(){
  this.navHistory.vibrateClick();
    this.router.navigateByUrl("/Forget-password")
  }
}