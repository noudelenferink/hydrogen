import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionResultsPage } from './competition-results';

@NgModule({
  declarations: [
    CompetitionResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionResultsPage),
  ],
})
export class CompetitionResultsPageModule {}
