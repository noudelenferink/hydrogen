import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionRankingPage } from './competition-ranking';

@NgModule({
  declarations: [
    CompetitionRankingPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionRankingPage),
  ],
})
export class CompetitionRankingPageModule {}
