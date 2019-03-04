import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompetitionRoundCreatePage } from './competition-round-create';
import { PipesModule } from '../../../pipes/pipes.module';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    CompetitionRoundCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(CompetitionRoundCreatePage),
    ComponentsModule,
    PipesModule
  ],
})
export class CompetitionRoundCreatePageModule {}
