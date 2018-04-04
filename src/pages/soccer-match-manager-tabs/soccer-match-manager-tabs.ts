import { Component, Injector, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { SoccerMatchManagerPage } from '../soccer-match-manager/soccer-match-manager';
import { SoccerMatchEventsManagerPage } from '../soccer-match-events-manager/soccer-match-events-manager';
import { BasePage } from '../base/base';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { SuperTabs } from 'ionic2-super-tabs';

@IonicPage()
@Component({
  selector: 'page-soccer-match-manager-tabs',
  templateUrl: 'soccer-match-manager-tabs.html',
})
export class SoccerMatchManagerTabsPage extends BasePage {
  general: any = SoccerMatchManagerPage;
  formation: any = SoccerMatchEventsManagerPage;
  soccerMatchEvents: any = SoccerMatchEventsManagerPage;

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
