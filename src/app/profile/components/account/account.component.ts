import {ChangeDetectionStrategy, Component, ElementRef, HostListener, signal, ViewChild} from '@angular/core';
import {FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {ErrorStateMatcher, provideNativeDateAdapter} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
import { CommonModule } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  standalone:true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule,FormsModule, MatFormFieldModule, MatInputModule,MatIconModule,ReactiveFormsModule,MatDatepickerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  showNavigation = true;
  isKeyboardOpen = false;
  storedUser = localStorage.getItem('userDetails');
  user = this.storedUser ? JSON.parse(this.storedUser) : null;

  @ViewChild('formContainer') formContainer!: ElementRef;

  adjustFormPadding(event: Event): void {
    this.isKeyboardOpen = true;

    // Scroll to the focused input field
    const target = event.target as HTMLElement;
    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  resetFormPadding(): void {
    this.isKeyboardOpen = false;
  }

  // Detect keyboard disappearance (especially on mobile)
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // If the window height increases, assume the keyboard is closed
    if (window.innerHeight > 600) {
      this.isKeyboardOpen = false;
    }
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(private router: Router) {
    console.log("user details from Parsing: ",this.user)
    Keyboard.addListener('keyboardDidShow', () => {
      this.showNavigation = false;
    });

    Keyboard.addListener('keyboardDidHide', () => {
      this.showNavigation = true;
    });
    // ✅ Dynamically set email value
    this.emailFormControl.setValue('xyz@gmail.com');
  }
  

  matcher = new MyErrorStateMatcher();
  goBack() {
    this.router.navigate(['/profile/user-profile']);
  }
}
