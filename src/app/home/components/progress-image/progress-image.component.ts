import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-progress-image',
  templateUrl: './progress-image.component.html',
  styleUrls: ['./progress-image.component.scss'],
  standalone: false
})
export class ProgressImageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  autoScrollInterval: any;
  userScrollTimeout: any;
  isUserScrolling = false;
  currentIndex = 0; // Active card index

  projects: any[] = [];

  constructor(private router: Router, private renderer: Renderer2, private authService: AuthService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects(): void {
    this.authService.getProjects().subscribe(
      (response: any) => {
        this.projects = response.projects; // Assuming API returns { projects: [...] }
        console.log(this.projects);
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  ngAfterViewInit() {
    this.startAutoScroll();
    this.renderer.listen(this.scrollContainer.nativeElement, 'scroll', () => this.onScroll());
  }

  startAutoScroll() {
    this.stopAutoScroll(); // Clear any existing interval
  
    this.autoScrollInterval = setInterval(() => {
      if (!this.isUserScrolling && this.scrollContainer) {
        const container = this.scrollContainer.nativeElement;
        const cards = container.children; // Get all child elements (cards)
  
        if (cards.length > 0) {
          this.currentIndex = (this.currentIndex + 1) % cards.length;
          cards[this.currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
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

    // Restart auto-scroll after 5 seconds of inactivity
    this.userScrollTimeout = setTimeout(() => {
      this.isUserScrolling = false;
      this.startAutoScroll();
    }, 3000);
  }

  updateCurrentIndex() {
    const container = this.scrollContainer.nativeElement;
    const cardWidth = container.clientWidth;
    this.currentIndex = Math.round(container.scrollLeft / cardWidth);
  }

  viewDetails(index: number) {
    this.router.navigate(['/home/plot-details'], { queryParams: { index } });
  }

  ngOnDestroy() {
    this.stopAutoScroll();
    if (this.userScrollTimeout) {
      clearTimeout(this.userScrollTimeout);
    }
  }
}
