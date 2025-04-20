import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-response',
  imports: [MatCardModule, MatIcon],
  templateUrl: './payment-response.component.html',
  styleUrl: './payment-response.component.css'
})
export class PaymentResponseComponent {
  paymentData: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const stringData = nav?.extras?.state?.['paymentResponse'];

    if (stringData) {
      try {
        this.paymentData = JSON.parse(stringData);
      } catch (err) {
        console.error('Error parsing payment response:', err);
      }
    }
  }
}
