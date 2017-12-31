import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CompetitionTabsPage } from '../pages/competition-tabs/competition-tabs';
import { TrainingsTabsPage } from '../pages/trainings-tabs/trainings-tabs';
import { TrainingsManagerListPage} from '../pages/trainings-manager-list/trainings-manager-list'

import Auth0Cordova from '@auth0/cordova';
import { AuthService } from '../services/auth.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TrainingsTabsPage;
  pages: Array<{ title: string, component: any, permissions?: string[] }>;
  isApp: boolean;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthService) {

    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      this.isApp = false;
    } else {
      this.isApp = true;
    }

    this.initializeApp();

    this.pages = [
      { title: 'Trainingen', component: TrainingsTabsPage, permissions: ["View_Trainings"]  },
      { title: 'Trainingenbeheer', component: TrainingsManagerListPage, permissions: ["Manage_Trainings"] },
      { title: 'Competities', component: CompetitionTabsPage, permissions: [] },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      (<any>window).handleOpenURL = (url) => {
        console.log(url);
        Auth0Cordova.onRedirectUri(url);
      };
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
