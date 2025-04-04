import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

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
    CommonModule
   
    
  ],
  providers: [
    provideClientHydration(),
 { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
