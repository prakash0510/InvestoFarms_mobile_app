import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserTransactionComponent } from './components/user-transaction/user-transaction.component';
import { DateFormatPipe } from "../pipes/date-format.pipe";


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserTransactionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DateFormatPipe
]
})
export class DashboardModule { }
