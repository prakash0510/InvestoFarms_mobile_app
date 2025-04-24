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
    const data = nav?.extras?.state?.['paymentResponse'];

    if (data) {
      try {
        const parsed = typeof data === 'string' ? JSON.parse(data) : data;
        this.paymentData = parsed.response; // ✅ extract response object
        console.log('✅ Extracted Payment Data:', this.paymentData);
      } catch (err) {
        console.error('❌ Error parsing payment response:', err);
      }
    }
  }
}
