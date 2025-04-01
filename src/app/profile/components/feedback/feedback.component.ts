import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-feedback',
  imports: [FormsModule, MatIcon,NgFor],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
  standalone:true
})
export class FeedbackComponent {
  User_ID= localStorage.getItem("UserID")
  rating = 0;
  comment = '';

  constructor(private authservice: AuthService){}
  setRating(star: number) {
    this.rating = star;
    console.log(this.rating)
  }

  submitFeedback() {
    // if (!this.rating) {
    //   alert('Please provide a star rating.');
    //   return;
    // }
    // this.authservice.feedback(this.User_ID,this.rating,this.comment).subscribe((res:any)=>{
    //   console.log("rating done")
    // })
    // console.log('Feedback Submitted:', { rating: this.rating, comment: this.comment });
    // alert('Thank you for your feedback!');

  }
}
