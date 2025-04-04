import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-crop-card',
  templateUrl: './crop-cycle.component.html',
  styleUrls: ['./crop-cycle.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatTableModule,
    CommonModule
  ]
})
export class CropCardComponent implements OnInit {
  crops: any[] = [];
  cropExpenses: any[] = [];
  expensesMap: { [cropId: number]: any } = {};
  displayedColumns: string[] = ['crop']; // Start with crop name

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Fetch data from AuthService
    this.crops = this.authService.getCrops();
    this.cropExpenses = this.authService.getCropExpenses();

    // console.log('Crops:', this.crops);
    // console.log('Crop Expenses:', this.cropExpenses);

    this.processExpenses();
  }

  processExpenses(): void {
    const uniqueExpenseKeys = new Set<string>();
  
    this.cropExpenses.forEach(expense => {
      try {
        // Clean leading/trailing backticks or single quotes
        const cleanedJson = expense.Expense_Type
          .replace(/^[`']/, '')
          .replace(/[`']$/, '');
          
        const parsed = JSON.parse(cleanedJson);
        this.expensesMap[expense.Crop_ID] = parsed;
  
        Object.keys(parsed).forEach(key => uniqueExpenseKeys.add(key));
      } catch (e) {
        console.error(`❌ Failed to parse expense for Crop_ID ${expense.Crop_ID}`, e);
      }
    });
  
    this.displayedColumns = ['crop', ...Array.from(uniqueExpenseKeys)];
  }
  
}
