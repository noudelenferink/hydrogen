import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsManagerListPage } from './trainings-manager-list';
import { PipesModule } from '../../pipes/pipes.module';
import { TrainingsManagerCreatePageModule } from '../trainings-manager-create/trainings-manager-create.module';
import { TrainingsManagerPageModule } from '../trainings-manager/trainings-manager.module';

@NgModule({
  declarations: [
    TrainingsManagerListPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingsManagerListPage),
    PipesModule,
    TrainingsManagerCreatePageModule,
    TrainingsManagerPageModule
  ],
})
export class TrainingsManagerListPageModule {}
