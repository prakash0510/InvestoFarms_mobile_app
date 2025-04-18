import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig : AuthConfig={
  issuer: "http://accounts.google.com",
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId:'398180835654-7uh6fgkj7o8gbl6mf4it1d3cfsj68sc9.apps.googleusercontent.com',
  scope: 'openid profile email'
}

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  // constructor(private readonly oAuthservice: OAuthService) {
  //   oAuthservice.configure(oAuthConfig)
  //   oAuthservice.loadDiscoveryDocument().then( ()=>{
  //     oAuthservice.tryLoginImplicitFlow().then(()=>{
  //       if(!oAuthservice.hasValidAccessToken){
  //         oAuthservice.initLoginFlow()
  //       }
  //       else{
  //         oAuthservice.loadUserProfile().then((userprofile)=>{
  //           console.log(JSON.stringify(userprofile))
  //         })
  //       }
  //     })
  //   })
  //  }
}
