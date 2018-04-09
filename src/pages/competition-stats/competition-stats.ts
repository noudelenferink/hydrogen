import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompetitionService } from '../../services/competition.service';
import { BasePage } from '../base/base';

/**
 * Generated class for the CompetitionStatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-competition-stats',
  templateUrl: 'competition-stats.html',
})
export class CompetitionStatsPage extends BasePage {
  public competitionStats: any;

  constructor(
    injector: Injector,
    public competitionService: CompetitionService
  ) {
    super(injector)
  }

  loadCompetitionStats() {
    this.competitionService.getCompetitionTeamStats(this.currentCompetition.Id, this.currentTeam.Id)
      .subscribe(result => {
        this.competitionStats = result;
      })
  }

  ionViewWillLoad() {
    this.loadCompetitionStats();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionStatsPage');
  }

}
