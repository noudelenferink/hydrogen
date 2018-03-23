import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionManagerPage } from './competition-manager';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { CompetitionRoundManagerPageModule } from '../competition-round-manager/competition-round-manager.module';
import { CompetitionRoundCreatePageModule } from '../competition-round-create/competition-round-create.module';
import { SoccerMatchCreatePageModule } from '../soccer-match-create/soccer-match-create.module';
import { CompetitionRoundsManagerPage } from '../competition-rounds-manager/competition-rounds-manager';
import { CompetitionTeamsManagerPage } from '../competition-teams-manager/competition-teams-manager';
import { CompetitionRoundsManagerPageModule } from '../competition-rounds-manager/competition-rounds-manager.module';
import { CompetitionTeamsManagerPageModule } from '../competition-teams-manager/competition-teams-manager.module';
import { CompetitionTeamCreatePageModule } from '../competition-team-create/competition-team-create.module';

@NgModule({
  declarations: [
    CompetitionManagerPage
  ],
  imports: [
    IonicPageModule.forChild(CompetitionManagerPage),
    CompetitionRoundsManagerPageModule,
    CompetitionRoundManagerPageModule,
    CompetitionTeamsManagerPageModule,
    
    CompetitionRoundCreatePageModule,
    CompetitionTeamCreatePageModule,
    PipesModule
  ],
})
export class CompetitionManagerPageModule {}
