import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingsTabsPage } from './trainings-tabs';
import { TrainingsListPageModule } from '../trainings-list/trainings-list.module';
import { TrainingsOverviewPageModule } from '../trainings-overview/trainings-overview.module';
import { TrainingDetailPageModule } from '../training-detail/training-detail.module';
import { SuperTab, SuperTabsModule } from 'ionic2-super-tabs';

@NgModule({
  declarations: [
    TrainingsTabsPage
  ],
  imports: [
    IonicPageModule.forChild(TrainingsTabsPage),
    TrainingsOverviewPageModule,
    TrainingsListPageModule,
    TrainingDetailPageModule,
    SuperTabsModule
  ]
})
export class TrainingsTabsPageModule {}
