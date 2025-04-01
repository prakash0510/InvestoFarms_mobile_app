import { Router } from '@angular/router';
import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AuthStateService } from '../../auth-state.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrl: './login-screen.component.css',
  standalone:true,
  imports:[MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule,MatIconModule,NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginScreenComponent{
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

constructor(private authservice: AuthService,private router:Router){}

http= inject(HttpClient)

onLogin(){
  this.authservice.login(this.loginObj.Email,this.loginObj.Password).subscribe((res:any)=>{
   localStorage.setItem('token',res.access_token)
   localStorage.setItem('UserID',res.user.id)
   console.log("UserID",res.user.id)
   this.router.navigateByUrl('/home/home-screen')
  }, error=>{
    alert('Wrong credentials')
  })
}

onSignup(){
  this.authservice.onSignup(this.SignupObj.Name,this.SignupObj.Email,this.SignupObj.Mobile_Number,this.SignupObj.City,this.SignupObj.State,this.SignupObj.Pincode,this.SignupObj.Password).subscribe((res:any)=>{
    alert(res)
  })
}

 
}
