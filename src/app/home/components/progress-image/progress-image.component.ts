import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-image',
  templateUrl: './progress-image.component.html',
  styleUrls: ['./progress-image.component.scss'],
  standalone:false
})
export class ProgressImageComponent implements OnInit {
  currentIndex = 0; // Track current image index
  activeBar = 0; // Track which bar is active (green)
  images = ["assets/images/plot-image.svg", "assets/images/plot-image.svg", "assets/images/plot-image.svg"]
  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation() {
    setInterval(() => {
      this.activeBar = (this.activeBar + 1) % 3; // Cycle through bars
      this.currentIndex = this.activeBar; // Change image based on active bar
    }, 5000); // Change every 2 seconds
  }
}
