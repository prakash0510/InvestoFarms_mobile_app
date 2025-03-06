import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  standalone:false
})
export class UserProfileComponent {
  isKYCCompleted = false; // Set based on your logic
  showKYCMessage = false;

  toggleKYCMessage() {
    this.showKYCMessage = !this.showKYCMessage;
  }
}