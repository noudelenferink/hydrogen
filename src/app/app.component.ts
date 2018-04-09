import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CompetitionTabsPage } from '../pages/competition-tabs/competition-tabs';
import { TrainingsTabsPage } from '../pages/trainings-tabs/trainings-tabs';
import { TrainingsManagerListPage} from '../pages/trainings-manager-list/trainings-manager-list'

import Auth0Cordova from '@auth0/cordova';
import { AuthService } from '../services/auth.service';
import { CompetitionManagerPage } from '../pages/competition-manager/competition-manager';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = CompetitionTabsPage;
  pages: Array<{ title: string, component: any, icon: string, permissions?: string[] }>;
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
      { title: 'Trainingen', component: TrainingsTabsPage, icon: 'ri-football_cones', permissions: ["View_Trainings"]  },
      { title: 'Trainingenbeheer', component: TrainingsManagerListPage, icon: 'ri-football_cones', permissions: ["Manage_Trainings"] },
      { title: 'Competities', component: CompetitionTabsPage, icon: 'ri-football_stats_graphic', permissions: [] },
      { title: 'Competitiebeheer', component: CompetitionManagerPage, icon: 'ri-football_stats_graphic', permissions: [] }
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
