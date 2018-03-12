import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerTrainingsPage } from './player-trainings';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PlayerTrainingsPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerTrainingsPage),
    PipesModule
  ],
})
export class PlayerTrainingsPageModule {}
