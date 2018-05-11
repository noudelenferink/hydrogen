import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchManagerPage } from './soccer-match-manager';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SoccerMatchManagerPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchManagerPage),
    ComponentsModule
  ],
  entryComponents: [
    SoccerMatchManagerPage
  ],
})
export class SoccerMatchManagerPageModule {}
