// src/app/services/razorpay.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Checkout } from 'capacitor-razorpay';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  private BASE_URL = 'https://backend-blush-rho.vercel.app' // Change this to your backend

  constructor(private http: HttpClient) {}

  createOrder(amount: number) {
    const payload = {
      "amount": amount,
      "currency": "INR"
  }
    return this.http.post<any>(`${this.BASE_URL}/orders`,payload);

  }

  async openCheckout(order: any): Promise<any> {
    const options = {
      key: 'rzp_live_AkDBdW70PlCJ4T',
      amount: order.amount.toString(),
      currency: "INR",
      name: 'Investofarm',
      image: '../../../../assets/images/output-onlinepngtools.png',
      description: 'Payment',
      order_id: order.order_id,
      prefill: {
        name: 'Test User',
        email: 'test@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#3399cc'
      }
    };

    return await Checkout.open(options);
  }

  // verifyPayment(payload: any) {
  //   return this.http.post(`${this.BASE_URL}/verify-payment`, payload);
  // }
}
