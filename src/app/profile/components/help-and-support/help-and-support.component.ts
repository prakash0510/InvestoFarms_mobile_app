import { Component } from '@angular/core';
import { FAQ } from '../../../../assets/constants/Faqs';
@Component({
  selector: 'app-help-and-support',
  templateUrl: './help-and-support.component.html',
  styleUrl: './help-and-support.component.css',
  standalone:false
})
export class HelpAndSupportComponent {
  faqs = FAQ;
  toggleAnswer(index: number) {
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false, // Open only the clicked one, close others
    }));
  }
}
