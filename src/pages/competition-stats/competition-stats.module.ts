import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionStatsPage } from './competition-stats';
import { PipesModule } from '../../pipes/pipes.module';
import { TooltipsModule } from 'ionic-tooltips';

@NgModule({
  declarations: [
    CompetitionStatsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionStatsPage),
    PipesModule,
    TooltipsModule
  ],
})
export class CompetitionStatsPageModule {}
