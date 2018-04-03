import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Http, HttpModule } from '@angular/http';
import { GLIonic2EnvConfigurationModule } from 'gl-ionic2-env-configuration';
import { SuperTabsModule } from 'ionic2-super-tabs';

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
import { PlayerTabsPageModule } from '../pages/player-tabs/player-tabs.module';
import { PlayerTrainingsPageModule } from '../pages/player-trainings/player-trainings.module';
import { CompetitionManagerPageModule } from '../pages/competition-manager/competition-manager.module';
import { CompetitionSchedulePageModule } from '../pages/competition-schedule/competition-schedule.module';
import { CompetitionRankingPageModule } from '../pages/competition-ranking/competition-ranking.module';
import { CompetitionResultsPageModule } from '../pages/competition-results/competition-results.module';
import { SoccerMatchService } from '../services/soccer-match.service';
import { TeamService } from '../services/team.service';
import { TempServiceProvider } from '../providers/temp-service/temp-service';

export function getAuthHttp(http) {
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
    SuperTabsModule.forRoot(),
    GLIonic2EnvConfigurationModule,
    HttpModule,
    PipesModule,
    TrainingsTabsPageModule,
    TrainingsManagerListPageModule,
    CompetitionTabsPageModule,
    CompetitionSchedulePageModule,
    CompetitionRankingPageModule,
    CompetitionResultsPageModule,
    PlayerTabsPageModule,
    PlayerTrainingsPageModule,
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
    SoccerMatchService,
    TeamService,
    TempServiceProvider
  ]
})
export class AppModule {}
