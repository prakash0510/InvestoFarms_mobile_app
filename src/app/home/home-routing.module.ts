import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlotDetailsComponent } from './components/plot-details/plot-details.component';

const routes: Routes = [
  {
    path: 'home-screen',
    component: HomeComponent
  },
  {
    path: 'plot-details',
    component: PlotDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
