// src/app/services/plot.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setPlotDetails, plotDetails } from '../../assets/constants/plotDetails';

@Injectable({
  providedIn: 'root'
})
export class PlotService {
  private apiUrl = 'http://43.204.235.152:8000/api/projects/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  fetchPlotDetails(): void {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (data) => {
        setPlotDetails(data); // Store API data in `plotDetails.ts`
        // console.log('Data stored:', plotDetails); // Debugging
      },
      error: (err) => {
        console.error('Error fetching plot details:', err);
      }
    });
  }
}
