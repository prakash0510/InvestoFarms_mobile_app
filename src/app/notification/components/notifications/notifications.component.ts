import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
  standalone:false
})
export class NotificationsComponent {
  notifications = [
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

}
