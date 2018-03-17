import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompetitionService } from '../../services/competition.service';
import { SessionService } from '../../services/session.service';

@IonicPage()
@Component({
  selector: 'page-competition-results',
  templateUrl: 'competition-results.html',
})
export class CompetitionResultsPage {
	currentCompetition: any;
  currentTeam: any;
	competitionResults: any[];
	competitionResultsTeam: any[];
  showAll: string;
  
  constructor(
    public appCtrl: App,
		public navCtrl: NavController,
		public navParams: NavParams,
		public competitionService: CompetitionService,
		public session: SessionService) {
			this.currentTeam = this.session.getCurrentTeam();
			this.currentCompetition = this.session.getCurrentCompetition();
      this.showAll = '0';
		  this.loadForSoccerMatchesForTeam();
  }

  loadAllSoccerMatches() {
		this.competitionService.getResults(this.currentCompetition.Id).subscribe(result =>
			this.competitionResults = result,
			result => this.competitionResults.forEach(
				t => t.isCurrentTeam = t.TeamID == this.currentTeam.Id
			)
		)
	}

	loadSoccerMatch(event, soccerMatchId) {
    // this.appCtrl.getRootNav().push(SoccerMatchPage, {
    //   soccerMatchId: soccerMatchId
    // });
  }

	loadForSoccerMatchesForTeam() {
		this.competitionService.getResultsForTeam(this.currentCompetition.Id, this.currentTeam.Id)
			.subscribe(
			result => {
				this.competitionResultsTeam = result;
				this.competitionResultsTeam.forEach(sm => sm.ResultType = this.getResultType(sm.Goals, sm.OpponentGoals));
			});
	}

	getTeamLogo(teamId) {
		//this.competitionService.getTeamLogo(teamId);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionResultsPage');
  }

  private getResultType(goals, opponentGoals) {
		if (goals > opponentGoals) {
			return 'W';
		} else if (goals < opponentGoals) {
			return 'L';
		} else {
			return 'D';
		}
	}
}
