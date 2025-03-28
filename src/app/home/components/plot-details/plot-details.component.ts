import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plotDetails,getPlotDetails } from '../../../../assets/constants/plotDetails';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-plot-details',
  templateUrl: './plot-details.component.html',
  styleUrl: './plot-details.component.css',
  standalone:false
})
export class PlotDetailsComponent implements OnInit{
  plotDetails=getPlotDetails()
  project: any[]=[]
  index: number = 0;
  showMore: boolean = false;

  constructor(private route: ActivatedRoute,private authservice: AuthService) {}

  

  
  ngOnInit() {
    this.fetchProjects();
    this.route.queryParams.subscribe(params => {
      this.index = +params['index']; // Convert to number
    });
  }

  fetchProjects(): void {
    this.authservice.getProjects().subscribe((response: any) => {
      
      // console.log(localStorage.getItem('token'))
      this.plotDetails = response.projects; 
      // console.log([this.plotDetails])
    }, error => {
      console.error('Error fetching projects:', error);
    });
  }

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
}
