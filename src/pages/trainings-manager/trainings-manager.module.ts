import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsManagerPage } from './trainings-manager';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TrainingsManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingsManagerPage),
    PipesModule
  ],
})
export class TrainingsManagerPageModule {}
