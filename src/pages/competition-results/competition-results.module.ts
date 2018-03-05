import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionResultsPage } from './competition-results';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    CompetitionResultsPage
  ],
  imports: [
    IonicPageModule.forChild(CompetitionResultsPage),
    ComponentsModule,
    PipesModule
  ],
})
export class CompetitionResultsPageModule {}
