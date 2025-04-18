import { ActivatedRoute, Router } from '@angular/router';
import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BehaviorSubject, merge} from 'rxjs';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthStateService } from '../../auth-state.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthService, SocialLoginModule, SocialUser } from '@abacritt/angularx-social-login';
import { GoogleApiService } from '../../../services/google-api.service';
import { setDetails } from '../../../../assets/constants/userDetails';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css',
  standalone:true,
  imports:[MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatIconModule,NgIf, GoogleSigninButtonModule,],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginScreenComponent{
  loading: boolean = true;
  

forgetPass() {
  this.router.navigateByUrl('Forget-password');
}
loginObj: any={
  "Email": "",
  "Password": "",
}
SignupObj: any={
  "Name": "",
  "Email": "",
  "Mobile_Number": null,
  "City": "",
  "State": "",
  "Pincode": null,
  "Password": ""
}

isSignInMode=true;
private tokenKey = 'access_token';
public isLoggedIn$ = new BehaviorSubject<boolean>(false);

constructor(private authservice: AuthService,private router:Router,  private socialAuthService: SocialAuthService, private route: ActivatedRoute, private googleapi:GoogleApiService ){}

signInWithGoogle(): void {
  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
    const idToken = user.idToken;

    // Now send this ID token to your backend
    this.authservice.googleLogin(idToken).subscribe((res: any) => {
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('refresh_token', res.refresh_token);
      localStorage.setItem('UserID', res.user.id);
      this.router.navigateByUrl('/home/home-screen');
    });
  }).catch(error => {
    console.error('Google Sign-In Error:', error);
    alert('Google Sign-In failed');
  });
}

setToken(token: string) {
  localStorage.setItem(this.tokenKey, token);
  this.isLoggedIn$.next(true);
}

getToken(): string | null {
  return localStorage.getItem(this.tokenKey);
}

// signInWithGoogle(): void {
//   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
//     const idToken = user.idToken;

//     // Now send this ID token to your backend
//     this.authservice.loginWithGoogle(idToken).subscribe((res: any) => {
//       localStorage.setItem('token', res.access_token);
//       localStorage.setItem('refresh_token', res.refresh_token);
//       localStorage.setItem('UserID', res.user.id);
//       this.router.navigateByUrl('/home/home-screen');
//     });
//   }).catch(error => {
//     console.error('Google Sign-In Error:', error);
//     alert('Google Sign-In failed');
//   });
// }


http= inject(HttpClient)
ngOnInit(): void {
  // Check for query param like ?signup=true
  this.route.queryParams.subscribe(params => {
    if (params['signup'] === 'true') {
      this.isSignInMode = false; // Show sign-up view
    }
  });
}


// signInWithGoogle(): void {
//   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
//     console.log('Google login success', user);
//     // Handle the successful login, e.g., send the token to your backend
//   }).catch((error) => {
//     console.log('Google login error', error);
//   });
// }



onLogin(){
  // this.loading= true;

  this.authservice.login(this.loginObj.Email,this.loginObj.Password).subscribe((res:any)=>{
   localStorage.setItem('token',res.access_token)
   localStorage.setItem('UserID',res.user.id)
   setDetails(res)
   console.log("UserID",res.user.id)
   this.router.navigateByUrl('/home/home-screen')
  // this.loading= false;

  }, error=>{
    alert('Wrong credentials')
  // this.loading= false;

  })
}

onSignup(){
  this.authservice.onSignup(this.SignupObj.Name,this.SignupObj.Email,this.SignupObj.Mobile_Number,this.SignupObj.City,this.SignupObj.State,this.SignupObj.Pincode,this.SignupObj.Password).subscribe((res:any)=>{
    alert(res)
  })
}

 
}
