import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { CompetitionSchedulePage } from '../competition-schedule/competition-schedule';
import { CompetitionResultsPage } from '../competition-results/competition-results';
import { CompetitionRankingPage } from '../competition-ranking/competition-ranking';
import { CompetitionStatsPage } from '../competition-stats/competition-stats';
import { BasePage } from '../base/base';

@IonicPage()
@Component({
  selector: 'page-competition-tabs',
  templateUrl: 'competition-tabs.html',
})
export class CompetitionTabsPage extends BasePage {
  private schedule: any;
  private results: any;
  private ranking: any;
  private stats: any;

  constructor(injector: Injector, public platform: Platform) {
    super(injector);
    this.schedule = CompetitionSchedulePage;
    this.results = CompetitionResultsPage;
    this.ranking = CompetitionRankingPage;
    this.stats = CompetitionStatsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionTabsPage');
  }

}
