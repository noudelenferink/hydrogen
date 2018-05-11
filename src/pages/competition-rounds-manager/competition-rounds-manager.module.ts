import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionRoundsManagerPage } from './competition-rounds-manager';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CompetitionRoundsManagerPage
  ],
  imports: [
    IonicPageModule.forChild(CompetitionRoundsManagerPage),
    ComponentsModule,
    PipesModule
  ],
})
export class CompetitionRoundsManagerPageModule {}
