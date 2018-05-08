import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchPlayerManagerPage } from './soccer-match-player-manager';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { PlayerFullNamePipe } from '../../pipes/player-full-name/player-full-name';

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
