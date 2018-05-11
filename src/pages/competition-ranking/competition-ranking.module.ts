import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionRankingPage } from './competition-ranking';

import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    CompetitionRankingPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionRankingPage),
    PipesModule,
    ComponentsModule
  ],
})
export class CompetitionRankingPageModule {}
