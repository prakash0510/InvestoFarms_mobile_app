import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plotDetails,getPlotDetails } from '../../../../assets/constants/plotDetails';
import { AuthService } from '../../../services/auth.service';
import { RazorpayService } from '../../../services/razorpay.service';
import { firstValueFrom } from 'rxjs';



@Component({
  selector: 'app-plot-details',
  templateUrl: './plot-details.component.html',
  styleUrl: './plot-details.component.css',
  standalone:false
})


export class PlotDetailsComponent implements OnInit{
  plotDetails=getPlotDetails()
  crops:any []= getPlotDetails().crops
  project: any[]=getPlotDetails().projects
  index: number = 0;
  showMore: boolean = false;
  cropsExp: any[]=getPlotDetails().crops_expenses;
  amount: number = 1000; // Example amount in INR

  constructor(private route: ActivatedRoute,private authservice: AuthService, private razorpayService: RazorpayService) {}

  ngOnInit() {
    this.fetchProjects();
    this.route.queryParams.subscribe(params => {
      this.index = +params['index']; // Convert to number
    });
  }

  fetchProjects(): void {
    // this.authservice.getProjects().subscribe((response: any) => {
      
      // console.log(localStorage.getItem('token'))
      this.plotDetails = getPlotDetails().projects;
      this.crops=getPlotDetails().crops; 
      this.cropsExp=getPlotDetails().crops_expenses; 

      console.log(this.cropsExp)
      console.log([this.plotDetails])
  }

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
    
  cleanExpenseType(expenseType: string): any {
    try {
      return JSON.parse(expenseType.replace(/\\"/g, '"'));
    } catch (error) {
      console.error("Invalid JSON string:", error);
      return null;
    }
  }
  
  async makePayment() {
    try {
      // Step 1: Call backend to create order
      const order = await firstValueFrom(this.razorpayService.createOrder(this.amount*100));  

      // const order = 'order_QK46SVgPmHziac';

      // Step 2: Open Razorpay checkout
      const response = await this.razorpayService.openCheckout(order);

      console.log('Payment success:', response);

      response.then(
        (success:any)=>alert('Payment successful!'+JSON.stringify(success)),
        (error:any)=>alert('error: '+JSON.stringify(error))
      )

      // Step 3: Verify payment with backend
      // const verificationPayload = {
      //   razorpay_order_id: response.razorpay_order_id,
      //   razorpay_payment_id: response.razorpay_payment_id,
      //   razorpay_signature: response.razorpay_signature
      // };

      // const verification = await this.razorpayService.verifyPayment(verificationPayload).toPromise();
      // alert('Payment verified successfully!');

    } catch (error) {
      console.error('Payment failed or error occurred:', error);
      alert('Payment failed!');
    }
  }
}
