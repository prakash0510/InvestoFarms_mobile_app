import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-success-payment',
  imports: [],
  templateUrl: './success-payment.component.html',
  styleUrl: './success-payment.component.css',
  standalone: true,
  encapsulation: ViewEncapsulation.None
})
export class SuccessPaymentComponent {
  eventBus = new EventEmitter<any>();
  subscription!: Subscription;
  receivedData: any;

  ngOnInit() {
    this.subscription = this.eventBus.subscribe(data => {
      this.receivedData = data.message;
      console.log('Received in B:', this.receivedData);
    });
  }
}