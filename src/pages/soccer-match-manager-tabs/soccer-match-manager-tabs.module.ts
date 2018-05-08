import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchManagerTabsPage } from './soccer-match-manager-tabs';
import { SoccerMatchEventsManagerPageModule } from '../soccer-match-events-manager/soccer-match-events-manager.module';
import { SoccerMatchManagerPageModule } from '../soccer-match-manager/soccer-match-manager.module';
import { ComponentsModule } from '../../components/components.module';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SoccerMatchManagerPage } from '../soccer-match-manager/soccer-match-manager';
import { SoccerMatchLineupManagerPageModule } from '../soccer-match-lineup-manager/soccer-match-lineup-manager.module';
import { SoccerMatchPlayerManagerPageModule } from '../soccer-match-player-manager/soccer-match-player-manager.module';

@NgModule({
  declarations: [
    SoccerMatchManagerTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchManagerTabsPage),
    SoccerMatchManagerPageModule,
    SoccerMatchEventsManagerPageModule,
    SoccerMatchLineupManagerPageModule,
    SoccerMatchPlayerManagerPageModule,
    ComponentsModule,
    SuperTabsModule
  ]
})
export class SoccerMatchManagerTabsPageModule {}
