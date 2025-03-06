import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
})
export class AppComponent {
  title = 'investoFarm';
  showNavigation = true; 

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const hiddenRoutes = ['/','/Carousal-1','/Carousal-2','/Carousal-3','/Login', '/Forget-password','/Otp-forgot-password','/Rest-password','/Sign-up']; // List of pages to HIDE navigation
      this.showNavigation = !hiddenRoutes.includes(this.router.url);
    });
  }
    // Define the type for the keys of activeIcons
    activeIcons: { [key in 'home' | 'setting' | 'dashboard' | 'notification' | 'profile']: string } = {
      home: 'assets/home.png',
      setting: 'assets/setting.png',
      dashboard: 'assets/dashboard.png',
      notification: 'assets/notification.png',
      profile: 'assets/profile.png',
    };
  
    toggleIcon(icon: 'home' | 'setting' | 'dashboard' | 'notification' | 'profile'): void {
      const iconBase = 'assets/'; // Ensure your icons are in this folder
  
      // Correct the typing for the key variable in the for loop
      for (let key in this.activeIcons) {
        // Cast key to a valid key of activeIcons
        if (key === icon) {
          this.activeIcons[key as keyof typeof this.activeIcons] = `${iconBase}${key}Active.png`;
        } else {
          this.activeIcons[key as keyof typeof this.activeIcons] = `${iconBase}${key}.png`;
        }
      }
    }
  }
  