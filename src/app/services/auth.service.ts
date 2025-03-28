import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://investofarm-backend.onrender.com/api'; // Your API endpoint

  constructor(private http: HttpClient, private router: Router) {}

  login(Email: string, Password: string): Observable<any> {
    const body = { Email, Password };
    return this.http.post<any>(`${this.apiUrl}/users/login`, body);
  }


logout() {
  return this.http.get<any>(`${this.apiUrl}/users/logout`)
}

// home(){
//   return this.http.get<any>(`https://investofarm-backend.onrender.com/`)
// }

onSignup(Name: string, Email: string, Mobile_Number: number,City: string, State: string,Pincode: number,Password: string):Observable<any>{
  const body = JSON.stringify({ Name, Email, Mobile_Number, City, State, Pincode, Password });
  const headers = { 'Content-Type': 'application/json' };
 return this.http.post<any>(`${this.apiUrl}/users/signup`,body,{headers})
}

getProjects():Observable<any>{
  return this.http.get<any>(`https://investofarm-backend.onrender.com/api/projects/`);
}

getNotifications():Observable<any>{
  return this.http.get<any>(`${this.apiUrl}/notifications/`);
}

}
