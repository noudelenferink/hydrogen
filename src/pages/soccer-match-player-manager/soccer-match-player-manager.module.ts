import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchPlayerManagerPage } from './soccer-match-player-manager';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { SelectSearchableModule } from 'ionic-select-searchable';

@NgModule({
  declarations: [
    SoccerMatchPlayerManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchPlayerManagerPage),
    PipesModule,
    ComponentsModule,
    SelectSearchableModule
  ]
})
export class SoccerMatchPlayerManagerPageModule {}
