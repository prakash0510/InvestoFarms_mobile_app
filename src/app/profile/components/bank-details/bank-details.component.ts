import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { getDetails } from '../../../../assets/constants/userDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-details',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './bank-details.component.html',
  styleUrl: './bank-details.component.css',
})
export class BankDetailsComponent {
  storedUser = localStorage.getItem('userDetails');
  user = this.storedUser ? JSON.parse(this.storedUser) : null;
bankObj={
  'User_ID': this.user.user.ID,
  'Bank_Name':'',
  'Account_Number':'',
  'IFSC_Code':'',
}

constructor(private authservice:AuthService,private router:Router){
  console.log(getDetails())
  console.log(this.bankObj.User_ID)
}
postBankDetail(){
  this.authservice.submitBankDetails(this.bankObj).subscribe(()=>{
    console.log("successfully submitted")
  })
}

goBack() {
  this.router.navigate(['/profile/user-profile']);
}

}
