import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotficationsRoutingModule } from './notification-routing.module';



@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule, NotficationsRoutingModule
  ]
})
export class NotificationModule { }
