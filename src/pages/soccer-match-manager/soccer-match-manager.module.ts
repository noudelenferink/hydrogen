import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchManagerPage } from './soccer-match-manager';

@NgModule({
  declarations: [
    SoccerMatchManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchManagerPage),
  ],
})
export class SoccerMatchManagerPageModule {}
