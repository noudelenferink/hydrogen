import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsManagerListPage } from './trainings-manager-list';
import { PipesModule } from '../../../pipes/pipes.module';
import { TrainingsManagerCreatePageModule } from '../trainings-manager-create/trainings-manager-create.module';
import { TrainingManagerPageModule } from '../training-manager/training-manager.module';

@NgModule({
  declarations: [
    TrainingsManagerListPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingsManagerListPage),
    PipesModule,
    TrainingsManagerCreatePageModule,
    TrainingManagerPageModule
  ],
})
export class TrainingsManagerListPageModule {}
