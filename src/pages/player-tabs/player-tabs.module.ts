import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerTabsPage } from './player-tabs';
import { PlayerTrainingsPageModule } from '../player-trainings/player-trainings.module';

@NgModule({
  declarations: [
    PlayerTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerTabsPage),
    PlayerTrainingsPageModule
  ],
})
export class PlayerTabsPageModule {}
