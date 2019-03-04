import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionTeamCreatePage } from './competition-team-create';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    CompetitionTeamCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionTeamCreatePage),
    PipesModule
  ],
})
export class CompetitionTeamCreatePageModule {}
