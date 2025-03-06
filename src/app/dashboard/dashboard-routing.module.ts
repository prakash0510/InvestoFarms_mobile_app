import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserTransactionComponent } from './components/user-transaction/user-transaction.component';

const routes: Routes = [
  {
    path: 'user-dashboard',
    component: UserDashboardComponent
  },
  {
    path: 'user-transaction',
    component: UserTransactionComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
