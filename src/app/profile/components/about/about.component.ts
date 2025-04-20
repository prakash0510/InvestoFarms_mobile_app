import { Component } from '@angular/core';
import { NavigationHistoryService } from '../../../services/navigation-history.service';

@Component({
  selector: 'about-investofarms',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone:false
})
export class AboutComponent {
  constructor(private navHistory:NavigationHistoryService){}
  vibrate(){
    this.navHistory.vibrateClick()
  }

}
