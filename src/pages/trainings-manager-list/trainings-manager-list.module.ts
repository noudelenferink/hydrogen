import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsManagerListPage } from './trainings-manager-list';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TrainingsManagerListPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingsManagerListPage),
    PipesModule
  ],
})
export class TrainingsManagerListPageModule {}
