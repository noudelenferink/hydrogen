import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompetitionService } from '../../services/competition.service';
import { SessionService } from '../../services/session.service';

@IonicPage()
@Component({
  selector: 'page-competition-schedule',
  templateUrl: 'competition-schedule.html',
})
export class CompetitionSchedulePage {
	currentCompetition: any;
  currentTeam: any;
	competitionSchedule: any[];
	competitionScheduleTeam: any[];
  showAll: string;
  
  constructor(
    public navCtrl: NavController,
		public navParams: NavParams,
		public competitionService: CompetitionService,
		public session: SessionService
  ) {
		this.currentTeam = this.session.getCurrentTeam();
		this.currentCompetition = this.session.getCurrentCompetition();
		this.showAll = '0';
		this.loadForSoccerMatchesForTeam();
  }

  loadAllSoccerMatches(){
		this.competitionService.getSchedule(this.currentCompetition.Id).subscribe(
			result => this.competitionSchedule = result,
			result => this.competitionSchedule.forEach(t => t.isCurrentTeam = (t.HomeTeamID == this.currentTeam.Id || t.AwayTeamID == this.currentTeam.Id))
		)
	}

	loadForSoccerMatchesForTeam() {
		this.competitionService.getScheduleForTeam(this.currentCompetition.Id, this.currentTeam.Id).subscribe(
			result => this.competitionScheduleTeam = result);
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionSchedulePage');
  }

}
