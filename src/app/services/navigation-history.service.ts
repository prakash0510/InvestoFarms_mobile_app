import { Injectable } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root',
})
export class NavigationHistoryService {
  private history: string[] = [];
  private startTracking = false;

  setTracking(active: boolean) {
    this.startTracking = active;
  }

  addUrl(url: string) {
    if (this.startTracking) {
      this.history.push(url);
    }
  }

  getPreviousUrl(): string | undefined {
    this.history.pop(); // Remove current
    return this.history.pop(); // Get previous
  }

  clearHistory() {
    this.history = [];
  }
  async vibrateClick() {
    await Haptics.impact({ style: ImpactStyle.Medium });
  }
  
}
