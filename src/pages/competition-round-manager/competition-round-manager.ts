import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import { CompetitionService } from '../../services/competition.service';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { SoccerMatchCreatePage } from '../soccer-match-create/soccer-match-create';

@IonicPage()
@Component({
  selector: 'page-competition-round-manager',
  templateUrl: 'competition-round-manager.html',
})
export class CompetitionRoundManagerPage {
  competitionId: number;
  competitionRoundId: number;
  competitionRound: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public auth: AuthService,
    public session: SessionService,
    public competitionService: CompetitionService,
    public soccerMatchService: SoccerMatchService) {
    this.competitionId = this.navParams.get('competitionId');
    this.competitionRoundId = this.navParams.get('competitionRoundId');

    this.loadCompetitionRound();
  }

  loadCompetitionRound() {
    this.competitionService.getCompetitionRound(this.competitionRoundId)
      .subscribe(result => this.competitionRound = result);
  }

  loadSoccerMatch(event, soccerMatchId) {
    // this.navCtrl.push(SoccerMatchManagerPage, {
    //   soccerMatchId: soccerMatchId
    // });
  }

  createSoccerMatch() {
    var usedTeams = [].concat.apply([], this.competitionRound.map(function(sm) { return [sm.HomeTeam.TeamID, sm.AwayTeam.TeamID]}));
    let modal = this.modalCtrl.create(SoccerMatchCreatePage, {competitionId: this.competitionId, competitionRoundId: this.competitionRoundId, usedTeams: usedTeams});
    modal.present();
    modal.onDidDismiss(success => {
    if(success) {
      this.loadCompetitionRound();
    }
    })
  }

promptDelete(soccerMatch) {
    let confirm = this.alertCtrl.create({
      title: 'Wedstrijd verwijderen',
      message: 'Weet je zeker dat je de geselecteerde wedstrijd wilt verwijderen?',
      buttons: [
        {
          text: 'Annuleren',
          handler: () => {}
        },
        {
          text: 'Verwijderen',
          handler: () => {
            this.soccerMatchService.deleteSoccerMatch(soccerMatch.SoccerMatchID).subscribe(result => {
                this.loadCompetitionRound();
            })
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionRoundManagerPage');
  }

}
