import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchEventCreatePage } from './soccer-match-event-create';

@NgModule({
  declarations: [
    SoccerMatchEventCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchEventCreatePage),
  ],
})
export class SoccerMatchEventCreatePageModule {}
