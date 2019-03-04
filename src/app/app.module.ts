import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../services/auth.service';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { GLIonic2EnvConfigurationModule } from 'gl-ionic2-env-configuration';
import { TestService } from '../services/test.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SessionService } from '../services/session.service';
import { PipesModule } from '../pipes/pipes.module';
import { TrainingsTabsPageModule } from '../pages/trainings/trainings-tabs/trainings-tabs.module';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { TrainingService } from '../services/training.service';
import { CustomHttpInterceptor } from './custom-http-interceptor';
import { PlayerService } from '../services/player.service';
import { TrainingsManagerListPageModule } from '../pages/trainings-manager/trainings-manager-list/trainings-manager-list.module';
import { CompetitionService } from '../services/competition.service';
import { CompetitionManagerPageModule } from '../pages/competitions-manager/competition-manager/competition-manager.module';
import { TeamService } from '../services/team.service';
import { TrainingTeamGeneratorPageModule } from '../pages/training-team-generator/training-team-generator.module';
import { TrainingTeamGeneratorTabsPageModule } from '../pages/training-team-generator-tabs/training-team-generator-tabs.module';
import { SoccerMatchService } from '../services/soccer-match.service';

export function jwtOptionsFactory(storage, authService: AuthService) {
  return {
    tokenGetter: () => {
      return authService.accessToken;
      //return storage.get('access_token');
    },
    whitelistedDomains: [ 'xps-13-nick:3010', 'nifnic.nl:3100' ]
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    // Own
    IonicModule.forRoot(MyApp),
    TrainingsTabsPageModule,
    TrainingsManagerListPageModule,
    CompetitionManagerPageModule,
    TrainingTeamGeneratorTabsPageModule,
    PipesModule,

    // External
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    GLIonic2EnvConfigurationModule,
    SuperTabsModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage, AuthService]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true },
    AuthService,
    SessionService,
    CompetitionService,
    TeamService,
    TrainingService,
    PlayerService,
    SoccerMatchService,
    TestService
  ]
})
export class AppModule {}
