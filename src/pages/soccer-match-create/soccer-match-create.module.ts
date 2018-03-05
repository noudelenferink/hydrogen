import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoccerMatchCreatePage } from './soccer-match-create';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SoccerMatchCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(SoccerMatchCreatePage),
    ComponentsModule,
    PipesModule
  ],
})
export class SoccerMatchCreatePageModule {}
