import { Component } from '@angular/core';
import { getDetails } from '../../../../assets/constants/userDetails';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nominee',
  imports: [FormsModule],
  templateUrl: './nominee.component.html',
  styleUrl: './nominee.component.css'
})
export class NomineeComponent {
   userDetails=getDetails().user
  nomineeObj={
    'User_ID': this.userDetails.ID,
    'Name':'',
    'Relation':'',
    'Unique_ID':'',
  }
  constructor(private authservice:AuthService){}

  submitNominee(){
    this.authservice.submitNomineeDetails(this.nomineeObj).subscribe(()=>{
      console.log("successfully submitted nominee details")
    })
  }
}
