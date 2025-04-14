import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrl: './rest-password.component.css',
  standalone:true,
  imports: [FormsModule]
})
export class RestPasswordComponent {
  passwordObj = {
    email: localStorage.getItem('email'),
    newPassword: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService, private router:Router,private toastr:ToastrService) {}

  navigateToForgetpwd(){
    this.router.navigateByUrl('/Forget-password')
  }

  updatePassword() {
    console.log(this.passwordObj); // Debugging

    // Trim input values to avoid accidental spaces
    this.passwordObj.newPassword = this.passwordObj.newPassword.trim();
    this.passwordObj.confirmPassword = this.passwordObj.confirmPassword.trim();

    // Validate if fields are filled
    if (!this.passwordObj.email || !this.passwordObj.newPassword || !this.passwordObj.confirmPassword) {
      console.error('All fields are required!');
      return;
    }

    // Validate if new password matches confirm password
    if (this.passwordObj.newPassword !== this.passwordObj.confirmPassword) {
      console.error('New Password and Confirm Password do not match!');
      alert('New Password and Confirm Password must be the same.');
      return;
    }

    // Prepare the request object with email and new password (as required by API)
    const requestData = {
      email: this.passwordObj.email,
      password: this.passwordObj.newPassword,
    };

    this.authService.updatePassword(requestData).subscribe(
      (res: any) => {
        console.log('Password updated successfully');
        this.toastr.success("Password Updated")
        alert('Password updated successfully!');
        this.router.navigateByUrl('/Login')
      },
      (error) => {
        console.error('Password update failed', error);
        alert('Failed to update password. Please try again.');
      }
    );
  }

}