import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getPlotDetails } from '../../../../assets/constants/plotDetails';

@Component({
  selector: 'app-user-transaction',
  templateUrl: './user-transaction.component.html',
  styleUrl: './user-transaction.component.css',
  standalone:false
})
export class UserTransactionComponent implements OnInit {
  alltransac: boolean=true;
  transactions:any = getPlotDetails().transactions;
  alltransactions:any=getPlotDetails().all_transactions;
  index: number = 0;
projectName: string = '';
project:any[]=[];
filteredArray:any[]=[];

  constructor(private route: ActivatedRoute){
 this.project = Object.keys(getPlotDetails().transactions);

  }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.index = +params['index']; // Convert to number
      console.log("user transaction",this.index)
      // this.transactions = getPlotDetails().transactions[this.projectName] || [];
       this.filteredArray = getPlotDetails().all_transactions.filter((tx: { project_id: any; }) => tx.project_id === this.index);
      console.log("filter Array",this.filteredArray)
      
      
    });
    this.route.queryParams.subscribe(params => {
      this.alltransac=false
      this.alltransac = params['check'];
      // this.transactions = getPlotDetails().transactions[this.projectName] || [];
      // console.log("transactions",this.transactions);
      // console.log("param",this.projectName);
      console.log(this.alltransac)
      
    });

    
}

}
