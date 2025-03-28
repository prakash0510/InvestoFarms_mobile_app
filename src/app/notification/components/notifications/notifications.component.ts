import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
  standalone:false
})
export class NotificationsComponent implements OnInit {
  notifications:any[] = [
    { id: 1, title: "Title 1", description: "Notification 1 description goes here.", time: "4:00 PM" },
    { id: 2, title: "Title 2", description: "Notification 2 description goes here.", time: "5:00 PM" },
    { id: 3, title: "Title 3", description: "Notification 3 description goes here.", time: "6:00 PM" },
    { id: 4, title: "Title 4", description: "Notification 4 description goes here.", time: "7:00 PM" },
    { id: 5, title: "Title 5", description: "Notification 5 description goes here.", time: "8:00 PM" },
    { id: 6, title: "Title 6", description: "Notification 6 description goes here.", time: "9:00 PM" },
    { id: 7, title: "Title 7", description: "Notification 7 description goes here.", time: "10:00 PM" },
    { id: 8, title: "Title 8", description: "Notification 8 description goes here.", time: "11:00 PM" },
    { id: 9, title: "Title 9", description: "Notification 9 description goes here.", time: "12:00 AM" },
    { id: 10, title: "Title 10", description: "Notification 10 description goes here.", time: "1:00 AM" },
  ];
  
  constructor(private authservice: AuthService){}
  
  ngOnInit(): void {
      this.fetchNotifications();
  }

  fetchNotifications(){
    this.authservice.getNotifications().subscribe((response: any) => {
      
      console.log(localStorage.getItem('token'))
      this.notifications = response.data.notifications; 
    }, error => {
      console.error('Error fetching projects:', error);
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
