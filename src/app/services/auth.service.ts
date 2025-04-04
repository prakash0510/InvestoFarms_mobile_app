import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private cacheDuration = 5 * 60 * 1000; // 5 minutes
  private cacheTimestamp: number = 0;

  private projectsSubject = new BehaviorSubject<any>(null);
  private projects$ = this.projectsSubject.asObservable();

  private projects: any[] = [];
  private crops: any[] = [];
  private cropExpenses: any[] = [];
  private news: any[] = [];

  private apiUrl = 'https://investofarm-backend.onrender.com/api'; // Your API endpoint

  constructor(private http: HttpClient, private router: Router) {}

  login(Email: string, Password: string): Observable<any> {
    const body = { Email, Password };
    return this.http.post<any>(`${this.apiUrl}/users/login`, body);
  }

  logout() {
    return this.http.get<any>(`${this.apiUrl}/users/logout`);
  }

  // home(){
  //   return this.http.get<any>(`https://investofarm-backend.onrender.com/`)
  // }

  onSignup(
    Name: string,
    Email: string,
    Mobile_Number: number,
    City: string,
    State: string,
    Pincode: number,
    Password: string
  ): Observable<any> {
    const body = JSON.stringify({
      Name,
      Email,
      Mobile_Number,
      City,
      State,
      Pincode,
      Password,
    });
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(`${this.apiUrl}/users/signup`, body, {
      headers,
    });
  }

  getProjectsDetails(): Observable<any> {
    const currentTime = Date.now();

    // Check if cache is valid
    if (
      this.projectsSubject.getValue() &&
      currentTime - this.cacheTimestamp < this.cacheDuration
    ) {
      return this.projects$;
    }

    // Fetch new data from API
    return this.http
      .get('https://investofarm-backend.onrender.com/api/projects/')
      .pipe(
        tap((response) => {
          this.cacheTimestamp = Date.now();
          this.projectsSubject.next(response); // Update the cache
        })
      );
  }


  // ✅ Setters
  setProjects(projects: any[]): void {
    this.projects = projects;
  }

  setCrops(crops: any[]): void {
    this.crops = crops;
  }

  setCropExpenses(expenses: any[]): void {
    this.cropExpenses = expenses;
  }

  setNews(news: any[]): void {
    this.news = news;
  }

  // ✅ Getters
  getProjects(): any[] {
    return this.projects;
  }

  getCrops(): any[] {
    return this.crops;
  }

  getCropExpenses(): any[] {
    return this.cropExpenses;
  }

  getNews(): any[] {
    return this.news;
  }

  //  getProjects():Observable<any>{
  //   return this.http.get<any>(`https://investofarm-backend.onrender.com/api/projects/`);
  // }

  getNotifications(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/notifications/`);
  }

  getOtp(email: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/send_otp?email=${encodeURIComponent(email)}`
    );
  }

  verifyOtp(email: string, otp: string) {
    return this.http.get<any>(
      `${this.apiUrl}/verify_otp?email=${encodeURIComponent(email)}&otp=${otp}`
    );
  }

  updatePassword(data: any) {
    return this.http.put<any>(`${this.apiUrl}/users/update-password`, data);
  }
  feedback(UserID: number, rating: number, comment: string) {
    const body = JSON.stringify({ UserID, rating, comment });
    console.log(body);
    return this.http.post<any>(`${this.apiUrl}/feedback`, body);
  }
}
