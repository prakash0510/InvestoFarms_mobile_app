import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotficationsRoutingModule } from './notification-routing.module';
import { DateFormatPipe } from "../pipes/date-format.pipe";



@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule, NotficationsRoutingModule,
    DateFormatPipe
]
})
export class NotificationModule { }
