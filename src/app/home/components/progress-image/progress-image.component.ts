  import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { plotDetails } from '../../../../assets/constants/plotDetails';
import { ActivatedRoute } from '@angular/router';
  @Component({
    selector: 'app-progress-image',
    templateUrl: './progress-image.component.html',
    styleUrls: ['./progress-image.component.scss'],
    standalone:false
  })
  export class ProgressImageComponent implements AfterViewInit, OnDestroy{
    @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
    plotDetailsList=plotDetails
    progressArray: number[] = [];
    autoScrollInterval: any;
    currentIndex = 0;
  
    ngAfterViewInit() {
      this.progressArray = new Array(this.plotDetailsList.length).fill(0);
      this.startAutoScroll();
    }
  
    startAutoScroll() {
      this.autoScrollInterval = setInterval(() => {
        const container = this.scrollContainer.nativeElement;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
        if (container.scrollLeft < maxScrollLeft) {
          container.scrollLeft += container.clientWidth;
          this.currentIndex++;  
        } else {
          container.scrollLeft = 0;
          this.currentIndex = 0;
        }
  
        this.updateProgressBars();
      }, 5000); // Auto-scroll every 3 seconds
    }
  
    onScroll() {
      this.updateProgressBars();
    }
  
    updateProgressBars() {
      const container = this.scrollContainer.nativeElement;
      const cardWidth = container.clientWidth;
      const scrollLeft = container.scrollLeft;
  
      this.plotDetailsList.forEach((_, index) => {
        const cardStart = index * cardWidth;
        const cardEnd = cardStart + cardWidth;
  
        if (scrollLeft >= cardStart && scrollLeft < cardEnd) {
          this.progressArray[index] = ((scrollLeft - cardStart) / cardWidth) * 100;
        } else {
          this.progressArray[index] = 0;
        }
      });
    }
  
    ngOnDestroy() {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
      }
    }
  
  }
  // export class ProgressImageComponent implements OnInit {
    // currentIndex = 0; // Track current image index
    // activeBar = 0; // Track which bar is active (green)
    // plotDetailsList=plotDetails
    // images: string[] = []

    // plotId: number | null = null;
    // plotDetails: any = null; // Store plot details here
  
    // // Mock data for plots (replace with real API data)
    // plots = plotDetails;
    // currentPlot = this.plots[0];
    
    //   constructor(private route: ActivatedRoute) {}
    
    // ngOnInit(): void {
    //   this.route.queryParams.subscribe(params => {
    //     this.plotId = params['id'] ? +params['id'] : null;
    //     if (this.plotId !== null) {
    //       this.plotDetails = this.plots.find(plot => plot.id === this.plotId);
    //     }
    //   });
    //   this.extractImages();
    //   this.startAnimation();
    // }

    // startAnimation() {
    //   setInterval(() => {
    //     this.activeBar = (this.activeBar + 1) % this.images.length;
    //     this.currentIndex = this.activeBar; // Sync image change
    //     this.currentPlot = this.plots[this.currentIndex];
    //   }, 5000); // Change every 2 seconds
    // }
    // extractImages() {
    //   // Extract 'image' property from each plot and store it in allImages array
    //   this.images = plotDetails.map(plot => plot.image);
  
    //   console.log("Extracted Images:", this.images);
    // }
    
  // }
