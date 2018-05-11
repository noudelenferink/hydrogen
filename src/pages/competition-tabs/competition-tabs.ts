import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{ CompetitionSchedulePage } from '../competition-schedule/competition-schedule';
import{ CompetitionResultsPage } from '../competition-results/competition-results';
import{ CompetitionRankingPage } from '../competition-ranking/competition-ranking';
import { CompetitionStatsPage } from '../competition-stats/competition-stats';

@IonicPage()
@Component({
  selector: 'page-competition-tabs',
  templateUrl: 'competition-tabs.html',
})
export class CompetitionTabsPage {
  private schedule: any;
  private results: any;
  private ranking: any;
  private stats: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.schedule = CompetitionSchedulePage;
	  this.results = CompetitionResultsPage;
    this.ranking = CompetitionRankingPage;
    this.stats = CompetitionStatsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionTabsPage');
  }

}
