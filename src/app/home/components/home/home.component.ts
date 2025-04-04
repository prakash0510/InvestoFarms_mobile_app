import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:false
})
export class HomeComponent implements OnInit {
  news: any = [];
  
  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.getAllProjectDetails();
  }
  getAllProjectDetails(): void {
    this.authService.getProjectsDetails().subscribe(response => {
      this.news = response.news;
      this.authService.setProjects(response.projects);
      // console.log(response.projects)
      this.authService.setCrops(response.crops);
      this.authService.setCropExpenses(response.crop_expenses);
      // console.log(response)
    }, error => {
      console.error('Error fetching projects:', error);
    });
  }

}
