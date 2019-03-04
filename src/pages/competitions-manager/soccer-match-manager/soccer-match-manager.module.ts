import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../../components/components.module';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SoccerMatchManagerMainPageModule } from '../soccer-match-manager-main/soccer-match-manager-main.module';
import { SoccerMatchManagerPage } from './soccer-match-manager';
//import { SoccerMatchEventsManagerPageModule } from '../soccer-match-events-manager/soccer-match-events-manager.module';
//import { SoccerMatchLineupManagerPageModule } from '../soccer-match-lineup-manager/soccer-match-lineup-manager.module';
//import { SoccerMatchPlayerManagerPageModule } from '../soccer-match-player-manager/soccer-match-player-manager.module';

@NgModule({
  declarations: [
    SoccerMatchManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchManagerPage),
    SoccerMatchManagerMainPageModule,
    //SoccerMatchEventsManagerPageModule,
    //SoccerMatchLineupManagerPageModule,
    //SoccerMatchPlayerManagerPageModule,
    ComponentsModule,
    SuperTabsModule
  ]
})
export class SoccerMatchManagerPageModule {}
