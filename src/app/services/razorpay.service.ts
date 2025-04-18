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
      "amount": amount, // Amount in paise
      "currency": "INR"
  }
    return this.http.post<any>(`${this.BASE_URL}/orders`,payload);
    console.log("Order created successfully",Response);
  }

  async openCheckout(order: any): Promise<any> {
    const options = {
      key: 'rzp_test_3QUMYEmhprdtt8',
      amount: order.amount.toString(),
      currency: "INR",
      name: 'Investofarm',
      image: '../../../../assets/images/output-onlinepngtools.png',
      description: 'Payment',
      order_id: order,
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
