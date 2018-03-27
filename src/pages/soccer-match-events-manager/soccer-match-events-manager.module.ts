import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchEventsManagerPage } from './soccer-match-events-manager';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SoccerMatchEventsManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchEventsManagerPage),
    PipesModule
  ],
})
export class SoccerMatchEventsManagerPageModule {}
