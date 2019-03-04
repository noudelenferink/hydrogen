// src/services/auth.service.ts
import { Injectable, NgZone, ViewChild, Injector } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
// Import AUTH_CONFIG, Auth0Cordova, and auth0.js
import { AUTH_CONFIG } from './auth.config';
import Auth0Cordova from '@auth0/cordova';
import * as auth0 from 'auth0-js';
import { Platform, Nav, App } from 'ionic-angular';
import { BaseService } from './base.service';
import { AuthResult, IEnvConfiguration } from '../env-configuration/IEnvConfiguration';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService extends BaseService {
  Auth0: any;
  Client: any;
  accessToken: string;
  user: any = null;
  loggedIn: boolean;
  loading = true;
  jwtHelper: JwtHelperService;

  constructor(
    injector: Injector,
    public zone: NgZone,
    public platform: Platform,
    public events: Events,
    private storage: Storage,

    envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
  ) {
    super(envConfiguration);
    this.Auth0 = new auth0.WebAuth(this.envConfig.auth0_config);
    this.Client = new Auth0Cordova(this.envConfig.auth0_config);
    this.jwtHelper = new JwtHelperService();
    this.storage.get('profile').then(user => {
      this.user = user;
      this.events.publish('sessionLoaded', false);
    });
    this.storage.get('access_token').then(token => {
      this.accessToken = token;
    });
    this.storage.get('expires_at').then(exp => {
      this.loggedIn = Date.now() < JSON.parse(exp);
      this.loading = false;

    });
  }

  login() {
    this.loading = true;
    const options = {
      scope: 'openid profile offline_access',
      prompt: 'select_account'
    };

    // Authorize login request with Auth0: open login page and get auth results
    if (!this.platform.is('cordova')) {
      let authResult = {
        accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlJESTRPVEk0T1RKR09FRTNOekF3UXprek1FSXdRakkwUVVZMk5rSXhPVEU1UlVRd09EbERSUSJ9.eyJodHRwczovL3JhbmtpeC5uaWZuaWMubmwvdXNlcl9hdXRob3JpemF0aW9uIjp7InBlcm1pc3Npb25zIjpbInZpZXc6dHJhaW5pbmdzIiwidmlldzpjb21wZXRpdGlvbnMiLCJtYW5hZ2U6dHJhaW5pbmdzIiwibWFuYWdlOmNvbXBldGl0aW9ucyJdfSwiaXNzIjoiaHR0cHM6Ly9yYW5raXgtZGV2LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1YmI4YmY3MTYwMTQ0ZDc2ZmUyZWFiMmIiLCJhdWQiOlsiaHR0cDovL25pZm5pYy5ubC9yYW5raXgtZGV2IiwiaHR0cHM6Ly9yYW5raXgtZGV2LmV1LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE1NDk3MDkzOTksImV4cCI6MTU1MjMwMTM5OSwiYXpwIjoibWc2ZUpRX1lPZldCeDJXQ3hNbXdzUlk5SVh1YVV3LW8iLCJzY29wZSI6Im9wZW5pZCBuYW1lIGVtYWlsIHZpZXc6dHJhaW5pbmdzIHZpZXc6Y29tcGV0aXRpb25zIG1hbmFnZTp0cmFpbmluZ3MgbWFuYWdlOmNvbXBldGl0aW9ucyIsImd0eSI6InBhc3N3b3JkIn0.rCfnZ5a_yPelC11rPpg2pFvQ1U3g6H85gkigDjiNJprKTvVz160u0emrqLrk7a0rRuJdJ48UAKUlcDxjv_RpLNoxg7jWYFMLlnFXpfAZYjglsyQ_FHJvH-l1Wv3zOXyleuLswyHlGAJQXjFS5D6goKc3Ams6VVtTjhnwHld6InYVBY2EdSuUKn_BhwqxMUAg_U2LZ6BuGwHtKCkPe3WePQmaqX9XIOsGhNJGvrKYen_58H9ESrqm5_I-EjGCTbSDy5tgDBio_9UsMQd3Tw0yzpjE4pXh3cYMSR2TokCdqyg6Yo6uJrIEd0Vowt6Vreyh17NZiZBDUI3apg-WKgSVUQ",
        expiresIn: 2592000,
        scope: "openid profile view:trainings view:competitions manage:trainings manage:competitions",
        tokenType: "Bearer",
        reloadApp: true,
        idToken: null
      };
      this.setSession(authResult);
      this.setUserInfo();
    }
    else {
      this.Client.authorize(options, (err, authResult) => {
        if (err) {
          throw err;
        }

        this.setSession(authResult);
        this.setUserInfo();
      });
    }
  }

  public isAuthenticated() {
    return this.storage.get('expires_at').then(value => {
      const expiresAt = JSON.parse(value);
      return Date.now() < expiresAt;
    });
  }

  public isAuthorized(requiredPermissions: string[]): boolean {
    var self = this;

    if(!requiredPermissions) {
      return true;
    }

    if(!this.loggedIn) {
      return false;
    }

    var hasPermission = requiredPermissions.every(function (rp) {
      return self.userHasPermission(rp);
    });

    return hasPermission;
  }

  private isDevelopmentMode() {
    return !this.platform.is('cordova');
  }

  private setUserInfo() {
    // Fetch user's profile info
    this.Auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (err) {
        throw err;
      }
      this.storage.set('profile', profile).then(val =>
        this.zone.run(() => this.user = profile)
      );
    });
  }

  logout() {
    this.storage.remove('profile');
    this.storage.remove('access_token');
    this.storage.remove('expires_at');
    this.accessToken = null;
    this.user = null;
    this.loggedIn = false;
  }

  public handleAuthentication(): void {
    this.Auth0.parseHash((err, authResult: AuthResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        //this.router.navigate(['Home']);
      } else if (err) {
        //this.router.navigate(['Home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult: AuthResult): void {
    this.storage.set('access_token', authResult.accessToken);
    this.accessToken = authResult.accessToken;
    // Set Access Token expiration
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    this.storage.set('expires_at', expiresAt);
    // Set logged in
    this.loading = false;
    this.loggedIn = true;
    this.events.publish('sessionLoaded', authResult.reloadApp);
  }

  public userHasPermission(permission: string): boolean {
    const decodedToken = this.jwtHelper.decodeToken(this.accessToken);
    if (decodedToken) {
      return decodedToken['https://rankix.nifnic.nl/user_authorization'].permissions.some(function (r) {
        return r === permission;
      });
    }

    return false;
  }
}