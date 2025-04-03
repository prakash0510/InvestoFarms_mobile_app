import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
  standalone:true,
  imports:[FormsModule,MatIconModule,NgFor]
})
export class FeedbackComponent {
  rating = 0;
  comment = '';

  constructor(private authservice: AuthService) {}

  setRating(star: number) {
    this.rating = star;
  }

  submitFeedback() {
    if (!this.rating) {
      alert('Please provide a star rating.');
      return;
    }

    const feedbackData = {
      User_ID: localStorage.getItem('UserID'),  // If you have an actual user ID, replace 0 with it
      Rating: this.rating,
      User_Comment: this.comment
    };

    this.authservice.feedback(feedbackData).subscribe(
      (response) => {
        console.log('Feedback submitted successfully:', response);
        alert('Thank you for your feedback!');
        this.rating = 0;
        this.comment = '';
      },
      (error) => {
        console.error('Error submitting feedback:', error);
        alert('Failed to submit feedback. Please try again later.');
      }
    );
  }
}
