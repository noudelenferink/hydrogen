import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionTabsPage } from './competition-tabs';

@NgModule({
  declarations: [
    CompetitionTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionTabsPage),
  ],
})
export class CompetitionTabsPageModule {}
