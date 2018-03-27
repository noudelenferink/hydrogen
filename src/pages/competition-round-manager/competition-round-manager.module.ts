import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionRoundManagerPage } from './competition-round-manager';
import { SoccerMatchCreatePageModule } from '../soccer-match-create/soccer-match-create.module';
import { SoccerMatchManagerTabsPageModule } from '../soccer-match-manager-tabs/soccer-match-manager-tabs.module';

@NgModule({
  declarations: [
    CompetitionRoundManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionRoundManagerPage),
    SoccerMatchCreatePageModule,
    SoccerMatchManagerTabsPageModule
  ],
})
export class CompetitionRoundManagerPageModule {}
