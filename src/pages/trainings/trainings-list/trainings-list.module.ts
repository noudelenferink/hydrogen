import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsListPage } from './trainings-list';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [
    TrainingsListPage
  ],
  imports: [
    IonicPageModule.forChild(TrainingsListPage),
    PipesModule
  ],
})
export class TrainingsListPageModule {}
