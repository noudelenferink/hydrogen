import { Component, Injector } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CompetitionService } from '../../services/competition.service';
import { BasePage } from '../base/base';

IonicPage()
@Component({
  selector: 'page-competition-ranking',
  templateUrl: 'competition-ranking.html',
})
export class CompetitionRankingPage extends BasePage {
	competitionRanking: any[];

	constructor(
		injector: Injector,
		public competitionService: CompetitionService) {
		super(injector);
	}

	loadCompetitionRanking() {
		this.competitionService.getRanking(this.currentCompetition.Id).subscribe(result =>  {
			this.competitionRanking = result;
			this.competitionRanking.forEach(t => {t.isCurrentTeam = t.TeamID == this.currentTeam.Id});
		})
	}

	ionViewWillEnter() {
    this.loadCompetitionRanking();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionRankingPage');
  }

}
