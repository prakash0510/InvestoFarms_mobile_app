import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { PlotService } from '../../../services/plot.service';
import { getPlotDetails } from '../../../../assets/constants/plotDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:false
})
export class HomeComponent {

  news: any=getPlotDetails().news

  constructor(private authservice: AuthService,private plotservice: PlotService,private router:Router){
   
  }

  ngOnInit(): void {
    console.log("hi",this.news);
    // this.plotservice.fetchPlotDetails().subscribe(
    //   (response) => {
    
    //     console.log('Plot details:', response);
    
    //     // this.router.navigateByUrl('/home/home-screen');
    //   },
    //   (error) => {
    //     console.error('Failed to fetch plot details', error);
    
    //   }
    // );
    
    // this.fetchNews();
  }


  // fetchNews(): void {
  //   this.authservice.getProjects().subscribe((response: any) => {
      
  //     // console.log(localStorage.getItem('token'))
  //     this.news = response.news; 
  //   }, error => {
  //     console.error('Error fetching projects:', error);
  //   });
  // }
}
