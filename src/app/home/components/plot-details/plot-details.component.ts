import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plotDetails } from '../../../../assets/constants/plotDetails';
@Component({
  selector: 'app-plot-details',
  templateUrl: './plot-details.component.html',
  styleUrl: './plot-details.component.css',
  standalone:false
})
export class PlotDetailsComponent implements OnInit{
  plotDetails: any;
  showMore: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const plotId = params['id'] ? +params['id'] : null;
      if (plotId !== null) {
        this.plotDetails = plotDetails.find(plot => plot.id === plotId);
      }
    });
  }

  toggleReadMore() {
    this.showMore = !this.showMore;
  }
}
