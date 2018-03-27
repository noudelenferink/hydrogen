import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchManagerTabsPage } from './soccer-match-manager-tabs';
import { SoccerMatchEventsManagerPageModule } from '../soccer-match-events-manager/soccer-match-events-manager.module';
import { SoccerMatchManagerPageModule } from '../soccer-match-manager/soccer-match-manager.module';

@NgModule({
  declarations: [
    SoccerMatchManagerTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchManagerTabsPage),
    SoccerMatchManagerPageModule,
    SoccerMatchEventsManagerPageModule
  ],
})
export class SoccerMatchManagerTabsPageModule {}
