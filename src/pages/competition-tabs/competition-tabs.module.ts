import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionTabsPage } from './competition-tabs';
import { CompetitionResultsPageModule } from '../competition-results/competition-results.module';
import { CompetitionSchedulePageModule } from '../competition-schedule/competition-schedule.module';
import { CompetitionRankingPageModule } from '../competition-ranking/competition-ranking.module';
import { PipesModule } from '../../pipes/pipes.module';
import { CompetitionRoundCreatePageModule } from '../competition-round-create/competition-round-create.module';
import { CompetitionTeamCreatePageModule } from '../competition-team-create/competition-team-create.module';
import { SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    CompetitionTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionTabsPage),
    CompetitionResultsPageModule,
    CompetitionSchedulePageModule,
    CompetitionRankingPageModule,
    SuperTabsModule
  ],
})
export class CompetitionTabsPageModule {}
