import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchLineupManagerPage } from './soccer-match-lineup-manager';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SoccerMatchLineupManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchLineupManagerPage),
    PipesModule
  ],
})
export class SoccerMatchLineupManagerPageModule {}
