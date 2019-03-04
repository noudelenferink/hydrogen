import { Component, ViewChild, Injector, NgZone } from '@angular/core';
import { Nav, Platform, Events, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

// Import Auth0Cordova
import Auth0Cordova from '@auth0/cordova';
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';
import { TrainingsTabsPage } from '../pages/trainings/trainings-tabs/trainings-tabs';
import { MenuItem } from '../models/menu-item';
import { TrainingsManagerListPage } from '../pages/trainings-manager/trainings-manager-list/trainings-manager-list';
import { CompetitionManagerPage } from '../pages/competitions-manager/competition-manager/competition-manager';
import { TrainingTeamGeneratorPage } from '../pages/training-team-generator/training-team-generator';
import { TrainingTeamGeneratorTabsPage } from '../pages/training-team-generator-tabs/training-team-generator-tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events,
    private zone: NgZone,
    public sessionService: SessionService,
    public authService: AuthService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      new MenuItem('Home', HomePage, 'ri-football_cones', false),
      new MenuItem('Trainingen', TrainingsTabsPage, 'ri-football_cones', false, ["view:trainings"]),
      new MenuItem('Trainingbeheer', TrainingsManagerListPage, 'ri-football_cones', true, ["manage:trainings"]),
      new MenuItem('Trainingpartij generator', TrainingTeamGeneratorTabsPage, 'ri-football_cones', false),
      //new MenuItem('Competities', CompetitionTabsPage, 'ri-football_stats_graphic', false, ["view:competitions"]),
      new MenuItem('Competitiebeheer', CompetitionManagerPage, 'ri-football_stats_graphic', true, ["manage:competitions"])
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.authService.handleAuthentication();
      // Redirect back to app after authenticating
      (window as any).handleOpenURL = (url: string) => {
        Auth0Cordova.onRedirectUri(url);
      }

      this.sessionService.loadSession().subscribe(result => {
        this.nav.setRoot(TrainingTeamGeneratorTabsPage);
      });
      
    });
  }

  openPage(page) {
    this.zone.run(() => {
    this.nav.setRoot(page.Component);
    });
  }

  public login() {
    this.authService.login()
  }
}
