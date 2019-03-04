import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionTeamsManagerPage } from './competition-teams-manager';

import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    CompetitionTeamsManagerPage
  ],
  imports: [
    IonicPageModule.forChild(CompetitionTeamsManagerPage),
    ComponentsModule,
    PipesModule
  ],
})

export class CompetitionTeamsManagerPageModule {}
