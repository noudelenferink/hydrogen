import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchEventCreatePage } from './soccer-match-event-create';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SoccerMatchEventCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchEventCreatePage),
    PipesModule
  ],
})
export class SoccerMatchEventCreatePageModule {}
