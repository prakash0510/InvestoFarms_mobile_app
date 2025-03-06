import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css',
  standalone:false
})

export class LoginScreenComponent {
  constructor(private router: Router ) { }

  onSignUp(event: Event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Simulating authentication check
    const isAuthenticated = true; // Replace with actual login logic
  
    if (isAuthenticated) {
      this.router.navigate(['/home/home-screen']); // Navigate only after successful login
    } else {
      alert("Invalid credentials! Please try again.");
    }
  }

  onSignIn(event: Event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    // Simulating authentication check
    const isAuthenticated = true; // Replace with actual login logic
  
    if (isAuthenticated) {
      this.router.navigate(['/home/home-screen']); // Navigate only after successful login
    } else {
      alert("Invalid credentials! Please try again.");
    }
  }
  
  isSignInMode = true;

  toggleMode() {
    this.isSignInMode = !this.isSignInMode;
  }

}
