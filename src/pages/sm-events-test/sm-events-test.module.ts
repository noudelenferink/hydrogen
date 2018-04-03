import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmEventsTestPage } from './sm-events-test';

@NgModule({
  declarations: [
    SmEventsTestPage,
  ],
  imports: [
    IonicPageModule.forChild(SmEventsTestPage),
  ],
})
export class SmEventsTestPageModule {}
