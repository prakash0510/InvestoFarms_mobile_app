import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plotDetails } from '../../../../assets/constants/plotDetails';
@Component({
  selector: 'app-plot-details',
  templateUrl: './plot-details.component.html',
  styleUrl: './plot-details.component.css',
  standalone:false
})
export class PlotDetailsComponent {
  plotId: number | null = null;
  plotDetails: any = null; // Store plot details here

  // Mock data for plots (replace with real API data)
  plots = plotDetails;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.plotId = params['id'] ? +params['id'] : null;
      if (this.plotId !== null) {
        this.plotDetails = this.plots.find(plot => plot.id === this.plotId);
      }
    });
  }
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
