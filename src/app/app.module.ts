import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { provideAnimations } from '@angular/platform-browser/animations';
import { OAuthModule} from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot({preventDuplicates:true,}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DateFormatPipe,
    MatCardModule, 
    MatTableModule,
    CommonModule,
    SocialLoginModule,
    OAuthModule.forRoot(),
   
    
  ],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('220724747894-9rns853pmgavt1ik84r66caq4qng2k84.apps.googleusercontent.com')
        }
      ]
    } as SocialAuthServiceConfig,
  },
    provideClientHydration(),
 { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
 provideAnimations(),
 provideToastr(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
