import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionRoundManagerPage } from './competition-round-manager';

@NgModule({
  declarations: [
    CompetitionRoundManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionRoundManagerPage),
  ],
})
export class CompetitionRoundManagerPageModule {}
