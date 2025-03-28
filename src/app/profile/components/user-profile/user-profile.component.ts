import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  standalone:false
})
export class UserProfileComponent {
  isKYCCompleted = false; // Set based on your logic
  showKYCMessage = false;

  constructor(private authservice: AuthService,private router:Router){}
  toggleKYCMessage() {
    this.showKYCMessage = !this.showKYCMessage;
  }

  onLogout(){
    this.authservice.logout().subscribe((res:any)=>{
      this.router.navigateByUrl('/Login');
    })
  }
}