import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlotDetailsComponent } from './components/plot-details/plot-details.component';
import { PaymentResponseComponent } from './components/payment-response/payment-response.component';
import { SuccessPaymentComponent } from './components/success-payment/success-payment.component';
import { FailedPaymentComponent } from './components/failed-payment/failed-payment.component';

const routes: Routes = [
  {
    path: 'home-screen',
    component: HomeComponent
  },
  {
    path: 'plot-details',
    component: PlotDetailsComponent
  },
  { path: 'plot-details/:id',
     component: PlotDetailsComponent 
  },
  {
    path: 'success-payment',
    component: SuccessPaymentComponent
  },
  {
    path: 'failed-payment',
    component: FailedPaymentComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
