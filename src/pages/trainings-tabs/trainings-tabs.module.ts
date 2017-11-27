import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsTabsPage } from './trainings-tabs';

@NgModule({
  declarations: [
    TrainingsTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingsTabsPage),
  ]
})
export class TrainingsTabsPageModule {}
