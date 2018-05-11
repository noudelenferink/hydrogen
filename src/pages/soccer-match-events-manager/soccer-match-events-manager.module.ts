import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchEventsManagerPage } from './soccer-match-events-manager';
import { PipesModule } from '../../pipes/pipes.module';
import { SoccerMatchEventCreatePageModule } from '../soccer-match-event-create/soccer-match-event-create.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SoccerMatchEventsManagerPage
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchEventsManagerPage),
    SoccerMatchEventCreatePageModule,
    ComponentsModule,
    PipesModule
  ],
})
export class SoccerMatchEventsManagerPageModule {}
