import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsOverviewPage } from './trainings-overview';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    TrainingsOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingsOverviewPage),
    PipesModule
  ],
})
export class TrainingsOverviewPageModule {}
