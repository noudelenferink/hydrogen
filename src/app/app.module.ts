import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Http, HttpModule } from '@angular/http';
import { GLIonic2EnvConfigurationModule } from 'gl-ionic2-env-configuration';

import { MyApp } from './app.component';

import { TrainingsTabsPageModule } from '../pages/trainings-tabs/trainings-tabs.module';
import { TrainingDetailPageModule } from '../pages/training-detail/training-detail.module';
import { TrainingsManagerListPageModule } from '../pages/trainings-manager-list/trainings-manager-list.module';
import { TrainingsManagerCreatePageModule } from '../pages/trainings-manager-create/trainings-manager-create.module';
import { TrainingsManagerPageModule } from '../pages/trainings-manager/trainings-manager.module';

import { CompetitionTabsPageModule } from '../pages/competition-tabs/competition-tabs.module';
import { CompetitionSchedulePageModule } from '../pages/competition-schedule/competition-schedule.module';
import { CompetitionRankingPageModule } from '../pages/competition-ranking/competition-ranking.module';
import { CompetitionResultsPageModule } from '../pages/competition-results/competition-results.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Services
import { AuthService } from '../services/auth.service';
import { SessionService } from '../services/session.service';
import { TrainingService } from '../services/training.service';
import { PlayerService } from '../services/player-service';

// Pipes
import { PipesModule } from '../pipes/pipes.module';
import { PlayerTabsPageModule } from '../pages/player-tabs/player-tabs.module';
import { PlayerTrainingsPageModule } from '../pages/player-trainings/player-trainings.module';

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
    TrainingDetailPageModule,
    TrainingsManagerListPageModule,
    TrainingsManagerPageModule,
    TrainingsManagerCreatePageModule,
    CompetitionTabsPageModule,
    CompetitionSchedulePageModule,
    CompetitionRankingPageModule,
    CompetitionResultsPageModule,
    PlayerTabsPageModule,
    PlayerTrainingsPageModule
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
    SessionService,
    PlayerService
  ]
})
export class AppModule {}
