import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { CompetitionService } from '../../services/competition.service';

/**
 * Generated class for the SoccerMatchCreatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soccer-match-create',
  templateUrl: 'soccer-match-create.html',
})
export class SoccerMatchCreatePage {
  competitionRoundId: number
  homeTeamId: number;
  awayTeamId: number;
  currentSeason: any;
  currentTeam: any;
  competitionId: any;
  competionRoundId: any;
  teams: any;
  usedTeams: number[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public auth: AuthService,
    public session: SessionService,
    public competitionService: CompetitionService,
    public soccerMatchService: SoccerMatchService) {

    this.competitionId = this.navParams.get('competitionId');
    this.competitionRoundId = this.navParams.get('competitionRoundId');
    this.usedTeams = this.navParams.get('usedTeams');
    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();

    this.getTeams();
  }

  dismiss(success) {
    this.viewCtrl.dismiss(success);
  }

  getTeams() {
    this.competitionService.getCompetitionTeams(this.competitionId).subscribe(result => {
      this.teams = result;
    })
  }

  createSoccerMatch() {
    let newSoccerMatch = {
      CompetitionRoundID: this.competitionRoundId,
      HomeTeamID: this.homeTeamId,
      AwayTeamID: this.awayTeamId
    }

    this.soccerMatchService.createSoccerMatch(newSoccerMatch)
      .subscribe(result => this.dismiss(true));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerMatchCreatePage');
  }

}
