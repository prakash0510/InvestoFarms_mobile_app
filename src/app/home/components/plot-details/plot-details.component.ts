import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-plot-details',
  templateUrl: './plot-details.component.html',
  styleUrl: './plot-details.component.css',
  standalone: false
})
export class PlotDetailsComponent implements OnInit {
  plotDetails: any[] = [];
  // crops: any[] = [];
  // cropsExp: any[] = [];
  index: number = 0;
  showMore: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.index = +params['index']; // Convert to number
    });

    this.plotDetails = this.authService.getProjects();
    // this.crops = this.authService.getCrops();
    // this.cropsExp = this.authService.getCropExpenses();

    // console.log("Plot details:", this.plotDetails);
    // console.log("Crops:", this.crops);
    // console.log("Crop Expenses:", this.cropsExp);
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
}
