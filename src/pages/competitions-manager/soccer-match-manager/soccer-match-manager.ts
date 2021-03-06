import { Component, Injector, ViewChild } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';
import { BasePage } from '../../base/base';
import { SoccerMatchService } from '../../../services/soccer-match.service';
import { SuperTabs } from 'ionic2-super-tabs';
import { SoccerMatchManagerMainPage } from '../soccer-match-manager-main/soccer-match-manager-main';
//import { SoccerMatchEventsManagerPage } from '../soccer-match-events-manager/soccer-match-events-manager';
//import { SoccerMatchLineupManagerPage } from '../soccer-match-lineup-manager/soccer-match-lineup-manager';

@IonicPage()
@Component({
  selector: 'page-soccer-match-manager',
  templateUrl: 'soccer-match-manager.html',
})
export class SoccerMatchManagerPage extends BasePage {
  main: any = SoccerMatchManagerMainPage;
  //lineup: any = SoccerMatchLineupManagerPage;
  //soccerMatchEvents: any = SoccerMatchEventsManagerPage;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  soccerMatchParams: any;
  soccerMatch: any;
  tabsLoaded: boolean;

  constructor(
    injector: Injector,
    public soccerMatchService: SoccerMatchService,
    private events: Events) {
    super(injector);
  }

  ngAfterViewInit() {
    console.log('ionViewDidLoad TabsPage');
  }

  ionViewWillEnter() {
    let soccerMatchId = this.navParams.get('soccerMatchId');
    this.soccerMatchService.currentSoccerMatch = null;
    this.soccerMatchService.getSoccerMatch(soccerMatchId)
      .subscribe(result => {
        this.events.publish('loadedSoccerMatch', result);
        this.soccerMatch = result;
        this.soccerMatchParams = {
          soccerMatch: this.soccerMatch
        }
        this.tabsLoaded = true;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerMatchManagerTabsPage');
  }

}
