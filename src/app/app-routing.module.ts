import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:  () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path:'home',
    loadChildren:  () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule)
  },
  {
    path:'dashboard',
    loadChildren:  () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then((m) => m.NotificationModule)
  },
  {
    path:'profile',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
