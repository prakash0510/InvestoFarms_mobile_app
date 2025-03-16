import { Component } from '@angular/core';
import { AuthStateService } from '../../auth-state.service';

@Component({
  selector: 'app-forget-password-screen',
  templateUrl: './forget-password-screen.component.html',
  styleUrl: './forget-password-screen.component.css',
  standalone:false
})
export class ForgetPasswordScreenComponent {
  constructor(private authStateService: AuthStateService) {}

  goToSignUp() {
    this.authStateService.setSignInMode(false);  // Switch to Sign Up
  }
}
