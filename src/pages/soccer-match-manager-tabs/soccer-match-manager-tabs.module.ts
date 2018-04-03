import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchManagerTabsPage } from './soccer-match-manager-tabs';
import { SoccerMatchEventsManagerPageModule } from '../soccer-match-events-manager/soccer-match-events-manager.module';
import { SoccerMatchManagerPageModule } from '../soccer-match-manager/soccer-match-manager.module';
import { SmEventsTestPageModule } from '../sm-events-test/sm-events-test.module';
import { ComponentsModule } from '../../components/components.module';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SoccerMatchManagerPage } from '../soccer-match-manager/soccer-match-manager';

@NgModule({
  declarations: [
    SoccerMatchManagerTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchManagerTabsPage),
    SoccerMatchManagerPageModule,
    SoccerMatchEventsManagerPageModule,
    SmEventsTestPageModule,
    ComponentsModule,
    SuperTabsModule
  ]
})
export class SoccerMatchManagerTabsPageModule {}
