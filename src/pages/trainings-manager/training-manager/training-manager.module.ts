import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingManagerPage } from './training-manager';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    TrainingManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingManagerPage),
    PipesModule
  ],
})
export class TrainingManagerPageModule {}
