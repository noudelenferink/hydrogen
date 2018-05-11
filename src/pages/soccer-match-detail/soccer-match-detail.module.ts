import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchDetailPage } from './soccer-match-detail';

@NgModule({
  declarations: [
    SoccerMatchDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchDetailPage),
  ],
})
export class SoccerMatchDetailPageModule {}
