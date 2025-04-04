import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { PlotService } from './services/plot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
})
export class AppComponent {
  title = 'investoFarm';
  showNavigation = true; 

  

  constructor(private router: Router,private renderer: Renderer2,private plotservice: PlotService ) {
    this.router.events.subscribe(() => {
      const hiddenRoutes = ['/','/Carousal-1','/Carousal-2','/Carousal-3','/Login', '/Forget-password','/Otp-forgot-password','/Rest-password','/Sign-up']; // List of pages to HIDE navigation
      this.showNavigation = !hiddenRoutes.includes(this.router.url);
    });
  }
  

  
  ngOnInit() {
    this.plotservice.fetchPlotDetails();
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", () => {
        const bottomNav = document.querySelector(".bottom-nav") as HTMLElement;
        if (bottomNav) {
          this.renderer.setStyle(bottomNav, "bottom", "0px");
        }
      });
    }
  }

    // Define the type for the keys of activeIcons
    activeIcons: { [key in 'home' | 'setting' | 'dashboard' | 'notification' | 'profile']: string } = {
      home: 'assets/homeActive.png',
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
  