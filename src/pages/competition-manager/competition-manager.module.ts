import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionManagerPage } from './competition-manager';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { CompetitionRoundManagerPageModule } from '../competition-round-manager/competition-round-manager.module';
import { CompetitionRoundCreatePageModule } from '../competition-round-create/competition-round-create.module';
import { SoccerMatchCreatePageModule } from '../soccer-match-create/soccer-match-create.module';

@NgModule({
  declarations: [
    CompetitionManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionManagerPage),
    CompetitionRoundManagerPageModule,
    CompetitionRoundCreatePageModule,
    SoccerMatchCreatePageModule,
    ComponentsModule,
    PipesModule
  ],
})
export class CompetitionManagerPageModule {}
