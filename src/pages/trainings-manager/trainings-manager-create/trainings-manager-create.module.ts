import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsManagerCreatePage } from './trainings-manager-create';

@NgModule({
  declarations: [
    TrainingsManagerCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingsManagerCreatePage),
  ],
})
export class TrainingsManagerCreatePageModule {}
