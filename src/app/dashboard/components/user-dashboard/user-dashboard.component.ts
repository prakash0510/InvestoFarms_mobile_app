import { Component, OnInit } from '@angular/core';
import { getPlotDetails } from '../../../../assets/constants/plotDetails';
import { Router } from '@angular/router';
import { NavigationHistoryService } from '../../../services/navigation-history.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
  standalone:false
})
export class UserDashboardComponent  {
  invested=getPlotDetails().total_invested_amount;
  current=10000 + this.invested //hard coded current amount

  invested_project=getPlotDetails().invested_project;
  
  project:any[]=[];
  allTransactions: any[] = getPlotDetails().all_transactions;
displayedTransactions: any[] = [];
showAllTransactions: boolean = false;
limit: number = 3;
count: number=0;



viewDetails(index: number) {
  this.navHistory.vibrateClick();
  this.router.navigate(['/home/plot-details'], { queryParams: { index } });
  console.log("index",index)
}

ngOnInit() {
  const transactions = getPlotDetails().all_transactions;
  console.log(transactions)
  for (const projectName in transactions) {
    if (
      transactions.hasOwnProperty(projectName) &&
      Array.isArray(transactions[projectName])
    ) {
      transactions[projectName].forEach(txn => {
        this.allTransactions.push({ ...txn, projectName });
      });
    }
  }

  this.updateDisplayedTransactions();
}

  
  updateDisplayedTransactions() {
    if (this.showAllTransactions) {
      this.displayedTransactions = this.allTransactions;
    } else {
      this.displayedTransactions = this.allTransactions.slice(0, this.limit);
      console.log("Displayed transaction ",this.displayedTransactions)
    }
  }
  
  constructor(private router:Router, private navHistory:NavigationHistoryService){
    // console.log(this.testProject);
    // console.log(this.prodProject);
    console.log(this.invested_project)
    this.project = Object.keys(getPlotDetails().transactions);
    console.log(this.project)

  }
  expandedProject: string | null = null;

  toggleDetails(projectName: string) {
    this.expandedProject = this.expandedProject === projectName ? null : projectName;
  }

  viewTransactions(index: number){
    this.navHistory.vibrateClick();
    this.router.navigate(['/dashboard/user-transaction'], { queryParams: { index } });
    console.log("projID",index)
  }

  viewAllTransaction(check:boolean){
    this.navHistory.vibrateClick();
    this.router.navigate(['/dashboard/user-transaction'], { queryParams: { check } });
  }
  

  downloadPDF(): void {
    const pdfUrl: string = "assets/constants/SamplePdf.pdf"; // Adjust path as needed
    const link: HTMLAnchorElement = document.createElement("a");

    link.href = pdfUrl;
    link.download = "MyPDF.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

openDownloadedPDF(): void {
  const pdfUrl: string = "assets/constants/SamplePdf.pdf"; // Adjust the path if needed
  window.open(pdfUrl, "_blank"); // Opens in a new tab
}
}
