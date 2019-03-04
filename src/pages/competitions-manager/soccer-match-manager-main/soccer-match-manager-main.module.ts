import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchManagerMainPage } from './soccer-match-manager-main';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    SoccerMatchManagerMainPage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchManagerMainPage),
    ComponentsModule
  ],
  entryComponents: [
    SoccerMatchManagerMainPage
  ],
})
export class SoccerMatchManagerMainPageModule {}
