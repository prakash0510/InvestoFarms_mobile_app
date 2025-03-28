import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone:false
})
export class HomeComponent {

  news: any[]=[]

  constructor(private authservice: AuthService){}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.authservice.getProjects().subscribe((response: any) => {
      
      // console.log(localStorage.getItem('token'))
      this.news = response.news; 
    }, error => {
      console.error('Error fetching projects:', error);
    });
  }
}
