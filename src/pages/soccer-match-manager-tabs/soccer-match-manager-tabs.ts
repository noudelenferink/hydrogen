import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SoccerMatchManagerPage } from '../soccer-match-manager/soccer-match-manager';
import { SoccerMatchEventsManagerPage } from '../soccer-match-events-manager/soccer-match-events-manager';
import { BasePage } from '../base/base';
import { SoccerMatchService } from '../../services/soccer-match.service';

@IonicPage()
@Component({
  selector: 'page-soccer-match-manager-tabs',
  templateUrl: 'soccer-match-manager-tabs.html',
})
export class SoccerMatchManagerTabsPage extends BasePage {
  general = SoccerMatchManagerPage;
  formation = SoccerMatchEventsManagerPage;
  events = SoccerMatchEventsManagerPage;
  soccerMatchParams: any;
  soccerMatch: any;

  constructor(
    injector: Injector,
    public soccerMatchService: SoccerMatchService) {
    super(injector);
  }

  ionViewWillEnter() {
    let soccerMatchId = this.navParams.get('soccerMatchId');
    this.soccerMatchService.getSoccerMatch(soccerMatchId)
      .subscribe(result => {
        this.soccerMatch = result;
        this.soccerMatchParams = {
          soccerMatch: this.soccerMatch
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerMatchManagerTabsPage');
  }

}
