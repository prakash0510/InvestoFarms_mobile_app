import { Component } from '@angular/core';

@Component({
  selector: 'app-plot-details',
  templateUrl: './plot-details.component.html',
  styleUrl: './plot-details.component.css',
  standalone:false
})
export class PlotDetailsComponent {
  toggleReadMore(): void {
    const moreText = document.getElementById("moreText") as HTMLElement;
    const readMoreBtn = document.querySelector(".read-more") as HTMLSpanElement;

    if (moreText && readMoreBtn) {
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "inline";
            readMoreBtn.textContent = "Read Less";
        } else {
            moreText.style.display = "none";
            readMoreBtn.textContent = "Read More";
        }
    }
}

}
