import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PlotDetailsComponent } from './components/plot-details/plot-details.component';
import { ProgressImageComponent } from './components/progress-image/progress-image.component';
import { CropCardComponent } from "./components/crop-cycle/crop-cycle.component";
// import { CropCycleComponent } from "./components/crop-cycle/crop-cycle.component";


@NgModule({
  declarations: [
    HomeComponent,
    PlotDetailsComponent,
    ProgressImageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CropCardComponent
]
})
export class HomeModule { }
