import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingTeamGeneratorResultPage } from './training-team-generator-result';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TrainingTeamGeneratorResultPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingTeamGeneratorResultPage),
    PipesModule
  ],
  exports: [
    TrainingTeamGeneratorResultPage
  ]
})
export class TrainingTeamGeneratorResultPageModule {}
