import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionSchedulePage } from './competition-schedule';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    CompetitionSchedulePage
  ],
  imports: [
    IonicPageModule.forChild(CompetitionSchedulePage),
    ComponentsModule,
    PipesModule
  ],
})
export class CompetitionSchedulePageModule {}
