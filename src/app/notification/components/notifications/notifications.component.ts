import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
  standalone:false
})
export class NotificationsComponent implements OnInit {
  loading: boolean = true;
  notifications:any[] = [];
  
  constructor(private authservice: AuthService){}
  
  ngOnInit(): void {
      this.fetchNotifications();
  }

  fetchNotifications(){
    this.loading= true;
    this.authservice.getNotifications().subscribe((response: any) => {
      
      // console.log(localStorage.getItem('token'))
      this.notifications = response.data.notifications; 
    this.loading= false;

    }, error => {
      console.error('Error fetching projects:', error);
    this.loading= false;

    });
  }

   formatDateTime(dateTime: string): string {
    const inputDate = new Date(dateTime);
    const now = new Date();
  
    // Convert both to local date strings (yyyy-mm-dd) for comparison
    const inputDateString = inputDate.toDateString();
    const nowString = now.toDateString();
  
    // Formatting time in "h:mm AM/PM"
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${amPm}`;
  
    // Determine if it's Today, Yesterday, or a previous date
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
  
    if (inputDateString === nowString) {
      return `Today at ${formattedTime}`;
    } else if (inputDateString === yesterday.toDateString()) {
      return `Yesterday at ${formattedTime}`;
    } else {
      const options: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
      return `${inputDate.toLocaleDateString(undefined, options)} at ${formattedTime}`;
    }
  }

}
