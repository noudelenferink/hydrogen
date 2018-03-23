import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionRoundManagerPage } from './competition-round-manager';
import { SoccerMatchCreatePageModule } from '../soccer-match-create/soccer-match-create.module';
import { SoccerMatchManagerPageModule } from '../soccer-match-manager/soccer-match-manager.module';

@NgModule({
  declarations: [
    CompetitionRoundManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionRoundManagerPage),
    SoccerMatchCreatePageModule,
    SoccerMatchManagerPageModule
  ],
})
export class CompetitionRoundManagerPageModule {}
