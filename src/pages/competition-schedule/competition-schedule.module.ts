import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionSchedulePage } from './competition-schedule';

@NgModule({
  declarations: [
    CompetitionSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionSchedulePage),
  ],
})
export class CompetitionSchedulePageModule {}
