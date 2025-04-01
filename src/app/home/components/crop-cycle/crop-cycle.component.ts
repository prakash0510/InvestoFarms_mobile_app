import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-crop-card',
  templateUrl: './crop-cycle.component.html',
  styleUrls: ['./crop-cycle.component.scss'],
  standalone: true,
  imports:[MatCard, MatCardHeader,MatCardTitle,MatCardContent,MatTableModule, CommonModule]
})
export class CropCardComponent implements OnInit {

  
  crops = [
    { ID: 1, Name: "Kharif", Crop_Cycle: "June-October" },
    { ID: 2, Name: "Rabi", Crop_Cycle: "October-April" },
    { ID: 3, Name: "Zaid", Crop_Cycle: "March-June" }
  ];

  cropExpenses = [
    { ID: 2, Crop_ID: 2, Expense_Type: '{"Labor_cost": 1000, "Fertilizer_Cost": 5, "Seeds_Cost":234, "Water":234, "Miscellaneous":2323}' },
    { ID: 3, Crop_ID: 3, Expense_Type: '{"Labor_cost": 1000, "Fertilizer_Cost": 5, "Seeds_Cost":234, "Water":234, "Miscellaneous":2323}' },
    { ID: 4, Crop_ID: 1, Expense_Type: '{"Labor_cost": 100, "Fertilizer_Cost": 5, "Seeds_Cost":234, "Water":234, "Miscellaneous":2323}' }
  ];

  

  expensesMap: { [key: number]: any } = {};
  displayedColumns: string[] = ['crop']; 

  ngOnInit() {
    this.processExpenses();
  }

  processExpenses() {
    const uniqueKeys = new Set<string>();
  
    this.cropExpenses.forEach(expense => {
      const parsedExpenses = JSON.parse(expense.Expense_Type);
      this.expensesMap[expense.Crop_ID] = parsedExpenses;
  
      // Collect all unique expense keys
      Object.keys(parsedExpenses).forEach(key => uniqueKeys.add(key));
    });
  
    // Ensure displayedColumns includes all unique expense keys
    this.displayedColumns = ['crop', ...Array.from(uniqueKeys)];
  }
}