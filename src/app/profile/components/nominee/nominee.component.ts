import { Component } from '@angular/core';
import { getDetails } from '../../../../assets/constants/userDetails';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nominee',
  imports: [FormsModule],
  templateUrl: './nominee.component.html',
  styleUrl: './nominee.component.css',
  standalone:true
})
export class NomineeComponent {
  storedUser = localStorage.getItem('userDetails');
  user = this.storedUser ? JSON.parse(this.storedUser) : null;
  //  userDetails=getDetails().user
  nomineeObj={
    'User_ID': this.user.user.ID,
    'Name':'',
    'Relation':'',
    'Unique_ID':'',
  }
  constructor(private authservice:AuthService,private router:Router){}

  submitNominee(){
    this.authservice.submitNomineeDetails(this.nomineeObj).subscribe(()=>{
      console.log("successfully submitted nominee details")
    })
  }

  goBack() {
    this.router.navigate(['/profile/user-profile']);
  }
}
