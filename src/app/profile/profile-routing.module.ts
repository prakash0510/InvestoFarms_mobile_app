import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpAndSupportComponent } from './components/help-and-support/help-and-support.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AboutComponent } from './components/about/about.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { AccountComponent } from './components/account/account.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { NomineeComponent } from './components/nominee/nominee.component';

const routes: Routes = [
  {
    path: 'about-investofarms',
    component: AboutComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
   {
    path: 'help-and-support',
    component: HelpAndSupportComponent,
  },
  {
    path: 'our-mission',
    component: OurMissionComponent,
  },
  {
    path: 'account-details',
    component: AccountComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'bank-details',
    component: BankDetailsComponent,
  },
  {
    path: 'nominee-details',
    component: NomineeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
