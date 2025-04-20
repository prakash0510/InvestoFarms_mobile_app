import { Component } from '@angular/core';
import { FAQ } from '../../../../assets/constants/Faqs';
import { NavigationHistoryService } from '../../../services/navigation-history.service';
@Component({
  selector: 'app-help-and-support',
  templateUrl: './help-and-support.component.html',
  styleUrl: './help-and-support.component.css',
  standalone:false
})
export class HelpAndSupportComponent {
  faqs = FAQ;
  constructor(private navHistory:NavigationHistoryService){}
  toggleAnswer(index: number) {
    this.navHistory.vibrateClick();
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false, // Open only the clicked one, close others
    }));
  }
  vibrate(){
    this.navHistory.vibrateClick()
  }
}
