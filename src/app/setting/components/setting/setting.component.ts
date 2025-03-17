import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class SettingComponent {
  // Dropdown states
  languageDD = false;
  currencyDD = false;

  // Selected options
  selectedOptionC: string | null = null;
  selectedOptionL: string | null = null;

  // Dropdown options
  LanguageOptions: string[] = ['Hindi', 'English'];
  currencyOptions: string[] = ['INR', 'USD'];

  constructor(private toastr: ToastrService, private cdr: ChangeDetectorRef) {}

  // Toggle language dropdown
  toggleDropdownL() {
    this.languageDD = !this.languageDD;
  }

  // Toggle currency dropdown
  toggleDropdownC() {
    this.currencyDD = !this.currencyDD;
  }

  // Handle language selection
  selectOption(selectedLanguage: string, event: Event) {
    event.stopPropagation(); // Prevent dropdown from closing immediately
    this.selectedOptionL = selectedLanguage;

    if (selectedLanguage === 'Hindi') {
      this.selectedOptionL = null; // Reset selection
      this.showMsgToast();
      setTimeout(() => {
        this.cdr.detectChanges(); // Force UI update
      });
    } else {
      this.languageDD = false; // Close dropdown after selection
    }
  }

  // Handle currency selection
  selectCurrency(selectedCurrency: string, event: Event) {
    event.stopPropagation(); // Prevent dropdown from closing immediately
    this.selectedOptionC = selectedCurrency;

    if (selectedCurrency === 'USD') {
      this.selectedOptionC = null; // Reset selection
      this.showMsgToast();
      setTimeout(() => {
        this.cdr.detectChanges(); // Force UI update
      });
    } else {
      this.currencyDD = false; // Close dropdown after selection
    }
  }

  // Show toast message
  showMsgToast() {
    this.toastr.warning('Coming Soon');
  }
}