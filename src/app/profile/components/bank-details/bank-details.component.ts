import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { getDetails } from '../../../../assets/constants/userDetails';

@Component({
  selector: 'app-bank-details',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.css',
})
export class BankDetailsComponent {
  userDetails=getDetails().user
bankObj={
  'User_ID': this.userDetails.ID,
  'Bank_Name':'',
  'Account_Number':'',
  'IFSC_Code':'',
}

constructor(private authservice:AuthService){
  console.log(getDetails())
}
postBankDetail(){
  this.authservice.submitBankDetails(this.bankObj).subscribe(()=>{
    console.log("successfully submitted")
  })
}


}
