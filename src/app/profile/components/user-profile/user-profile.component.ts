import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { getDetails } from '../../../../assets/constants/userDetails';
import { NavigationHistoryService } from '../../../services/navigation-history.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
  standalone:false
})
export class UserProfileComponent {
  isKYCCompleted = false; // Set based on your logic
  showKYCMessage = false;
  storedUser = localStorage.getItem('userDetails');
  user = this.storedUser ? JSON.parse(this.storedUser) : null;
  constructor(private authservice: AuthService,private router:Router,private navHistory:NavigationHistoryService){
    console.log(this.user)
  }
  toggleKYCMessage() {
    this.showKYCMessage = !this.showKYCMessage;
  }

  vibrate(){
    this.navHistory.vibrateClick();
  }

  onLogout(){
    this.navHistory.vibrateClick()
    this.authservice.logout().subscribe((res:any)=>{
      localStorage.removeItem('token')
      localStorage.removeItem('userDetails')

      this.router.navigateByUrl('/Login');
      
    })
  }
}