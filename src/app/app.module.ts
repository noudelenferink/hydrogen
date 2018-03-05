import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Http, HttpModule } from '@angular/http';
import { GLIonic2EnvConfigurationModule } from 'gl-ionic2-env-configuration';

import { MyApp } from './app.component';

import { TrainingsTabsPageModule } from '../pages/trainings-tabs/trainings-tabs.module';
import { TrainingsManagerListPageModule } from '../pages/trainings-manager-list/trainings-manager-list.module';

import { CompetitionTabsPageModule } from '../pages/competition-tabs/competition-tabs.module';

import { ComponentsModule } from '../components/components.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Services
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';
import { TrainingService } from '../services/training.service';
import { PlayerService } from '../services/player-service';
import { CompetitionService } from '../services/competition.service';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { CompetitionManagerPageModule } from '../pages/competition-manager/competition-manager.module';
import { SoccerMatchService } from '../services/soccer-match.service';

export function getAuthHttp(http) {
  console.log(window.localStorage.getItem('id_token'));
  return new AuthHttp(new AuthConfig({
   //headerPrefix: YOUR_HEADER_PREFIX,
    noJwtError: false,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: () => {
      return window.localStorage.getItem('id_token');
    },
  }), http);
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GLIonic2EnvConfigurationModule,
    HttpModule,
    PipesModule,
    TrainingsTabsPageModule,
    TrainingsManagerListPageModule,
    CompetitionTabsPageModule,
    CompetitionManagerPageModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    TrainingService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    { provide: LOCALE_ID, useValue: 'nl' },
    SessionService,
    PlayerService,
    CompetitionService,
    SoccerMatchService
  ]
})
export class AppModule {}
