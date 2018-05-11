import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionTabsPage } from './competition-tabs';
import { CompetitionResultsPageModule } from '../competition-results/competition-results.module';
import { CompetitionSchedulePageModule } from '../competition-schedule/competition-schedule.module';
import { CompetitionRankingPageModule } from '../competition-ranking/competition-ranking.module';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { CompetitionStatsPageModule } from '../competition-stats/competition-stats.module';

@NgModule({
  declarations: [
    CompetitionTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionTabsPage),
    CompetitionResultsPageModule,
    CompetitionSchedulePageModule,
    CompetitionRankingPageModule,
    CompetitionStatsPageModule,
    SuperTabsModule
  ],
})
export class CompetitionTabsPageModule {}
