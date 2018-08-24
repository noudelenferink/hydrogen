import { Injectable, NgZone } from '@angular/core';

import Auth0Cordova from '@auth0/cordova';
import Auth0 from 'auth0-js';
import { Platform } from 'ionic-angular';

const auth0Config = {
  // needed for auth0
  clientID: 'DQaiYh7uM0htl0nHeR08VSJPIaYHhfou',

  // needed for auth0cordova
  clientId: 'DQaiYh7uM0htl0nHeR08VSJPIaYHhfou',
  domain: 'nifnic.eu.auth0.com',
  callbackURL: location.href,
  packageIdentifier: 'com.nifnic.rankix'
};

@Injectable()
export class AuthService {
  auth0 = new Auth0.WebAuth(auth0Config);
  accessToken: string;
  idToken: string;
  user: any;

  constructor(
    public zone: NgZone,
    public platform: Platform,
  ) {
    this.user = this.getStorageVariable('profile');
    this.idToken = this.getStorageVariable('id_token');
  }

  private getStorageVariable(name) {
    return JSON.parse(window.localStorage.getItem(name));
  }

  private setStorageVariable(name, data) {
    window.localStorage.setItem(name, JSON.stringify(data));
  }

  private setIdToken(token) {
    this.idToken = token;
    this.setStorageVariable('id_token', token);
  }

  private setAccessToken(token) {
    this.accessToken = token;
    this.setStorageVariable('access_token', token);
  }

  public isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt;
  }

  public isAuthorized(requiredPermissions: string[]) {
    var self = this;
    // if (this.platform.is('core') || this.platform.is('mobileweb')) {
    //   return true;
    // } else {
      if (this.isAuthenticated() && requiredPermissions.every(function (rp) { return self.userHasPermission(rp) })) {
        return true;
      }

      return false;
    // }
  }

  private userHasPermission(permission: string): boolean {
    if (this.user) {
      return this.user['http://nifnic.nl/permissions'].some(function (r) {
        return r === permission;
      });
    }

    return false;
  }

  public login() {
    const client = new Auth0Cordova(auth0Config);

    const options = {
      scope: 'openid profile offline_access'
    };

    client.authorize(options, (err, authResult) => {
      if (err) {
        throw err;
      }

      this.setIdToken(authResult.idToken);
      this.setAccessToken(authResult.accessToken);

      const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      this.setStorageVariable('expires_at', expiresAt);

      this.auth0.client.userInfo(this.accessToken, (err, profile) => {
        if (err) {
          throw err;
        }

        profile.user_metadata = profile.user_metadata || {};
        this.setStorageVariable('profile', profile);
        this.zone.run(() => {
          this.user = profile;
        });
      });
    });
  }

  public logout() {
    window.localStorage.removeItem('profile');
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('id_token');
    window.localStorage.removeItem('expires_at');

    this.idToken = null;
    this.accessToken = null;
    this.user = null;
  }

}