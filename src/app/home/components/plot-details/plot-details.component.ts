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
  crops:any []= getPlotDetails().crops
  project: any[]=getPlotDetails().projects
  index: number = 0;
  showMore: boolean = false;
  cropsExp: any[]=getPlotDetails().crops_expenses;

  constructor(private route: ActivatedRoute,private authservice: AuthService) {}

  

  
  ngOnInit() {
    this.fetchProjects();
    this.route.queryParams.subscribe(params => {
      this.index = +params['index']; // Convert to number
    });
  }

  fetchProjects(): void {
    // this.authservice.getProjects().subscribe((response: any) => {
      
      // console.log(localStorage.getItem('token'))
      this.plotDetails = getPlotDetails().projects;
      this.crops=getPlotDetails().crops; 
      this.cropsExp=getPlotDetails().crops_expenses; 

      console.log(this.cropsExp)
      console.log([this.plotDetails])
  }

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
    
  cleanExpenseType(expenseType: string): any {
    try {
      return JSON.parse(expenseType.replace(/\\"/g, '"'));
    } catch (error) {
      console.error("Invalid JSON string:", error);
      return null;
    }
  }
  
}
