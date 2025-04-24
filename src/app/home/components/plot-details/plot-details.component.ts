import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { plotDetails,getPlotDetails } from '../../../../assets/constants/plotDetails';
import { AuthService } from '../../../services/auth.service';
import { RazorpayService } from '../../../services/razorpay.service';
import { firstValueFrom } from 'rxjs';
import { NavigationHistoryService } from '../../../services/navigation-history.service';



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
  amount: number = 1; // Example amount in INR
  projectId!:Number;
  projectById:any;

  constructor(private route: ActivatedRoute,private authservice: AuthService, private razorpayService: RazorpayService, private router:Router, private navHistory:NavigationHistoryService) {}

  ngOnInit() {
    this.fetchProjects();
    this.route.queryParams.subscribe(params => {
      this.index = +params['index']; // Convert to number
      // console.log(this.index)
      this.projectById = this.project.find(project => project.ID === this.index);
      // console.log("project by ID",this.projectById)
    });

    this.projectId = Number(this.route.snapshot.paramMap.get('projectId'));

    console.log("ProjectID",this.projectId)
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
  this.navHistory.vibrateClick();
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
    this.navHistory.vibrateClick();
    const amountInPaise = this.amount*100;

    this.razorpayService.createOrder(amountInPaise).subscribe({
      next: async (order) => {
        try {
          const res = await this.razorpayService.openCheckout(order);
          // alert('✅ Payment Successful! \n' + JSON.stringify(res));
          // localStorage.setItem('paymentStatus',JSON.stringify(res))
          this.router.navigate(['/home/success-payment'], {
            state: { paymentResponse: JSON.stringify(res) }
          }); 
          
        } catch (error) {
          // this.router.navigate(['/home/success-payment'])
          alert('❌ Payment Failed \n' + JSON.stringify(error));
        }
      },
      error: (err) => {
        alert('Failed to create order. Please try again.');
        // this.router.navigate(['/home/success-payment'])
        console.error(err);
      }
    });
  }
}
