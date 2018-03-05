import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionTabsPage } from './competition-tabs';
import { CompetitionResultsPageModule } from '../competition-results/competition-results.module';
import { CompetitionSchedulePageModule } from '../competition-schedule/competition-schedule.module';
import { CompetitionRankingPageModule } from '../competition-ranking/competition-ranking.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CompetitionTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionTabsPage),
    CompetitionResultsPageModule,
    CompetitionSchedulePageModule,
    CompetitionRankingPageModule
  ],
})
export class CompetitionTabsPageModule {}
