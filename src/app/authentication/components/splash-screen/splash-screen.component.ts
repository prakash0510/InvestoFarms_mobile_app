import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlotService } from '../../../services/plot.service';
import { setPlotDetails, getPlotDetails } from '../../../../assets/constants/plotDetails';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css',
  standalone:false
})
export class SplashScreenComponent {
  constructor(private router: Router,private plotservice:PlotService) {}

  // navigateToHome() {
  //   this.router.navigate(['/Carousal-1']); // Example navigation to the root route
  // }
  ngOnInit() {
      const token = localStorage.getItem('token');
        const currentUrl = this.router.url;
      
        if (token && currentUrl === '/') {
          
           this.plotservice.fetchPlotDetails().subscribe((res)=>{
               setPlotDetails(res);
               if (Object.keys(getPlotDetails()).length === 0) {
                console.log("No properties")
              } else{
                this.router.navigate(["/home/home-screen"])
              }
              })
        } else{
          setTimeout(() => {
            this.router.navigate(['/Carousal-1']);
            }, 2000);

        }
    }
}
