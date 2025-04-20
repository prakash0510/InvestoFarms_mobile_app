// src/app/services/plot.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setPlotDetails, plotDetails } from '../../assets/constants/plotDetails';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlotService {
  private apiUrl = 'http://43.204.235.152:8000/api/projects/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  fetchPlotDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(data => {
        setPlotDetails(data); // You can still store the data here
      })
    );
  
  }
}
