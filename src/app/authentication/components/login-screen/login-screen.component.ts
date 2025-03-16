import { Router } from '@angular/router';
import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthStateService } from '../../auth-state.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css',
  standalone:true,
  imports:[MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatIconModule,NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginScreenComponent implements OnInit {
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  constructor(private router: Router,private authStateService: AuthStateService ) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }
  ngOnInit() {
    this.authStateService.isSignInMode$.subscribe(mode => {
      this.isSignInMode = mode;
    });
  }

  goToSignIn() {
    this.authStateService.setSignInMode(true); // Switch to Sign In
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Please enter a valid email');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

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

  forgetpwd(){
    this.router.navigate(["/Forget-password"])
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
  hide = signal(true);
  
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
