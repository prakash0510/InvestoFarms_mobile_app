import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { title } from 'process';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
  encapsulation:ViewEncapsulation.None ,
  standalone:false
})
export class SettingComponent {
  languageDD = false;
  currencyDD = false;

  selectedOptionC: string | null = null;
  selectedOptionL: string | null = null;
  LanguageOptions: string[] = ['Hindi', 'English'];
  currencyOptions: string[]= ['INR','USD']

  toggleDropdownL() {
    this.languageDD = !this.languageDD;
  }
  toggleDropdownC() {
    this.currencyDD = !this.currencyDD;
  }

  constructor(private toastr: ToastrService,private cdr: ChangeDetectorRef) {}

  selectOption(LanguageOptions: string, event: Event) {
    event.stopPropagation(); // Prevent dropdown from closing immediately
    this.selectedOptionL = LanguageOptions;
    if(this.selectedOptionL==='Hindi'){
      this.selectedOptionL = null;
      this.showMsgToast();
      setTimeout(() => {
        this.selectedOptionL = null;
        this.cdr.detectChanges(); // Force UI update
      });
    }
    else{
      this.languageDD = false; // Close dropdown after selection
    } 
  }

  selectCurrency(currencyOptions: string, event: Event){
    event.stopPropagation(); // Prevent dropdown from closing immediately
    this.selectedOptionC = currencyOptions;
    if(this.selectedOptionC==='USD'){
      this.selectedOptionC=null;
      this.showMsgToast();
      setTimeout(() => {
        this.selectedOptionC = null;
        this.cdr.detectChanges(); // Force UI update
      });
    } else{
      this.currencyDD = false; // Close dropdown after selection
    }
  }


  showMsgToast(){
    this.toastr.warning("Coming Soon");
  }
}
