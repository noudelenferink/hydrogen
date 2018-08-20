import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CompetitionTabsPage } from '../pages/competition-tabs/competition-tabs';
import { TrainingsTabsPage } from '../pages/trainings-tabs/trainings-tabs';
import { TrainingsManagerListPage } from '../pages/trainings-manager-list/trainings-manager-list'

import Auth0Cordova from '@auth0/cordova';
import { AuthService } from '../services/auth.service';
import { FcmProvider } from '../providers/fcm/fcm';
import { CompetitionManagerPage } from '../pages/competition-manager/competition-manager';
import { MenuItem } from '../models/menu-item';
import { tap } from 'rxjs/operators';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = CompetitionTabsPage;
  menuItems: Array<MenuItem>;
  isApp: boolean;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public fcm: FcmProvider,
    public toastCtrl: ToastController,
    public auth: AuthService) {

    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      this.isApp = false;
    } else {
      this.isApp = true;
    }

    this.initializeApp();

    this.menuItems = [
      new MenuItem('Trainingen', TrainingsTabsPage, 'ri-football_cones', false, ["View_Trainings"]),
      new MenuItem('Trainingenbeheer', TrainingsManagerListPage, 'ri-football_cones', true, ["Manage_Trainings"]),
      new MenuItem('Competities', CompetitionTabsPage, 'ri-football_stats_graphic', false, ["View_Competitions"]),
      new MenuItem('Competitiebeheer', CompetitionManagerPage, 'ri-football_stats_graphic', true, ["Manage_Competitions"])
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      (<any>window).handleOpenURL = (url) => {
        Auth0Cordova.onRedirectUri(url);
      };
    });

    this.platform.ready().then(() => {
      if (this.isApp) {
        // Get a FCM token
        this.fcm.getToken()

        // Listen to incoming messages
        this.fcm.listenToNotifications().pipe(
          tap(msg => {
            // show a toast
            var messageBody = msg['body'];
            const toast = this.toastCtrl.create({
              message: messageBody,
              duration: 3000
            });
            toast.present();
          })
        )
          .subscribe();
      }
    });
  }

  openPage(page) {
    this.nav.setRoot(page.Component);
  }
}
