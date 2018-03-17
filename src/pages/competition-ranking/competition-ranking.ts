import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompetitionService } from '../../services/competition.service';
import { SessionService } from '../../services/session.service';

IonicPage()
@Component({
  selector: 'page-competition-ranking',
  templateUrl: 'competition-ranking.html',
})
export class CompetitionRankingPage {
	currentCompetition: any;
  currentTeam: any;
	competitionRanking: any[];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public competitionService: CompetitionService,
		public session: SessionService) {

		this.currentTeam = this.session.getCurrentTeam();
		this.currentCompetition = this.session.getCurrentCompetition();
	}

	loadCompetitionRanking() {
		this.competitionService.getRanking(this.currentCompetition.Id).subscribe(function(result)  {
			this.competitionRanking = result;
			this.competitionRanking.forEach(t => t.isCurrentTeam = t.TeamID == this.currentTeam.Id);
		})
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionRankingPage');
  }

}
