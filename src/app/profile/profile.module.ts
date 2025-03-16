import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,} from '@angular/router';
import { HelpAndSupportComponent } from './components/help-and-support/help-and-support.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { AboutComponent } from './components/about/about.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { AccountComponent } from './components/account/account.component';






@NgModule({
  declarations: [
     HelpAndSupportComponent, UserProfileComponent, AboutComponent, OurMissionComponent,
  ],
  imports: [
    CommonModule, ProfileRoutingModule,
    AccountComponent
],
  exports:[RouterModule]
})
export class ProfileModule { }
