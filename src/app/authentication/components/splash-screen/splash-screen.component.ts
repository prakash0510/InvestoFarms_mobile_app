import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css',
  standalone:false
})
export class SplashScreenComponent {
  constructor(private router: Router) {}

  // navigateToHome() {
  //   this.router.navigate(['/Carousal-1']); // Example navigation to the root route
  // }
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/Carousal-1']);
    }, 2000);
  }
}
