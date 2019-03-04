import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingTeamGeneratorPage } from './training-team-generator';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TrainingTeamGeneratorPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingTeamGeneratorPage),
    PipesModule
  ],
  exports: [
    TrainingTeamGeneratorPage
  ]
})
export class TrainingTeamGeneratorPageModule {}
