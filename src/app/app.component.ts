import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { PlotService } from './services/plot.service';
import { NavigationHistoryService } from './services/navigation-history.service';
import { App } from '@capacitor/app';
import { filter } from 'rxjs';
import { setPlotDetails, getPlotDetails } from '../assets/constants/plotDetails';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false
})
export class AppComponent {
  title = 'investoFarm';
  showNavigation = true; 

  async vibrateClick() {
    await Haptics.impact({ style: ImpactStyle.Medium });
  }
  

  constructor(private router: Router,private renderer: Renderer2,private plotservice: PlotService ,private navHistory: NavigationHistoryService) {
    this.router.events
  .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
  .subscribe((event) => {
    const hiddenRoutes = ['/', '/Carousal-1', '/Carousal-2', '/Carousal-3', '/Login', '/Forget-password', '/Otp-forgot-password', '/Rest-password', '/Login?signup=true','/Login?signup=false'];
    this.showNavigation = !hiddenRoutes.includes(event.urlAfterRedirects);
  });

    this.trackUrls();
    this.setupBackButtonHandler();
  }
  
  trackUrls() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((event: any) => {
      const url = event.urlAfterRedirects;

      // Start tracking only after /home/home-screen
      if (url === '/home/home-screen') {
        this.navHistory.setTracking(true);
        this.navHistory.clearHistory(); // reset history when entering home screen
      } else if(url==='/Login'){
        this.navHistory.clearHistory();
      }

      this.navHistory.addUrl(url);
    });
  }

  setupBackButtonHandler() {
    App.addListener('backButton', () => {
      const currentUrl = this.router.url;

      if (currentUrl === '/home/home-screen') {
        // Optional: Exit the app on home
        App.exitApp();
        return;
      }

      const prevUrl = this.navHistory.getPreviousUrl();

      if (prevUrl) {
        this.router.navigateByUrl(prevUrl);
      } else {
        // Fallback or exit
        App.exitApp();
      }
    });
  }

  
  ngOnInit() {
    // const token = localStorage.getItem('token');
    // const currentUrl = this.router.url;
  
    // if (token && currentUrl === '/') {
      
    //    this.plotservice.fetchPlotDetails().subscribe((res)=>{
    //        setPlotDetails(res);
    //        if (Object.keys(getPlotDetails()).length === 0) {
    //         console.log("No properties")
    //       } else{
    //         this.router.navigate(["/home/home-screen"])
    //       }
    //       })
    // } 
  
    // Resize fix
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
      this.vibrateClick();
      
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
  