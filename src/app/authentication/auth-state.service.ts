import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private signInMode = new BehaviorSubject<boolean>(true);
  isSignInMode$ = this.signInMode.asObservable();

  setSignInMode(value: boolean) {
    this.signInMode.next(value);
  }
}
