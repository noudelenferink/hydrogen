import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingDetailPage } from './training-detail';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    TrainingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingDetailPage),
    PipesModule
  ],
})
export class TrainingDetailPageModule {}
