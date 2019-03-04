import { NgModule } from '@angular/core';
import { IonicPageModule, Events } from 'ionic-angular';
import { TrainingTeamGeneratorTabsPage } from './training-team-generator-tabs';
import { TrainingTeamGeneratorPageModule } from '../training-team-generator/training-team-generator.module';
import { TrainingTeamGeneratorResultPageModule } from '../training-team-generator-result/training-team-generator-result.module';

@NgModule({
  declarations: [
    TrainingTeamGeneratorTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingTeamGeneratorTabsPage),
    TrainingTeamGeneratorPageModule,
    TrainingTeamGeneratorResultPageModule
  ],
})
export class TrainingTeamGeneratorTabsPageModule {
}
