import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { plotDetails } from '../../../../assets/constants/plotDetails';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-progress-image',
  templateUrl: './progress-image.component.html',
  styleUrls: ['./progress-image.component.scss'],
  standalone: false
})
export class ProgressImageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  plotDetailsList = plotDetails;
  autoScrollInterval: any;
  userScrollTimeout: any;
  isUserScrolling = false;
  currentIndex = 0; // Active card index

  constructor(private router: Router, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.startAutoScroll();
    this.renderer.listen(this.scrollContainer.nativeElement, 'scroll', () => this.onScroll());
  }

  startAutoScroll() {
    this.stopAutoScroll();

    this.autoScrollInterval = setInterval(() => {
      if (!this.isUserScrolling) {
        const container = this.scrollContainer.nativeElement;
        const cardWidth = container.clientWidth;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft < maxScrollLeft) {
          container.scrollLeft += cardWidth;
          this.currentIndex = Math.round(container.scrollLeft / cardWidth);
        } else {
          container.scrollLeft = 0;
          this.currentIndex = 0;
        }
      }
    }, 3000);
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.autoScrollInterval = null;
    }
  }

  onScroll() {
    this.isUserScrolling = true;
    this.updateCurrentIndex();

    if (this.userScrollTimeout) {
      clearTimeout(this.userScrollTimeout);
    }

    this.userScrollTimeout = setTimeout(() => {
      this.isUserScrolling = false;
      this.startAutoScroll();
    }, 5000);
  }

  updateCurrentIndex() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.clientWidth;
    this.currentIndex = Math.round(container.scrollLeft / cardWidth);
  }

  viewDetails(item: any) {
    if (item && item.id !== undefined) { // Ensure id=0 is handled
      this.router.navigate(['/home/plot-details'], { queryParams: { id: item.id } });
    }
  }

  ngOnDestroy() {
    this.stopAutoScroll();
    if (this.userScrollTimeout) {
      clearTimeout(this.userScrollTimeout);
    }
  }
}