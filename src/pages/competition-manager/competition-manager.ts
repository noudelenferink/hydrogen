import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import { CompetitionService } from '../../services/competition.service';
import { CompetitionRoundManagerPage } from '../competition-round-manager/competition-round-manager';
import { CompetitionRoundCreatePage } from '../competition-round-create/competition-round-create';

@IonicPage()
@Component({
  selector: 'page-competition-manager',
  templateUrl: 'competition-manager.html',
})
export class CompetitionManagerPage {

  competitionRounds: Object[];
  currentSeason: any;
  currentTeam: any;
  currentCompetition: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public auth: AuthService,
    public session: SessionService,
    public competitionService: CompetitionService) {
    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();
    this.currentCompetition = this.session.getCurrentCompetition();
  }

  ionViewWillEnter() {
    this.loadCompetitionRounds();
  }

  loadCompetitionRounds() {
    this.competitionService.getCompetitionRounds(this.currentCompetition.Id)
      .subscribe(result => this.competitionRounds = result);
  }

  loadCompetitionRound(event, competitionRound) {
    this.navCtrl.push(CompetitionRoundManagerPage, {
      competitionId: this.currentCompetition.Id,
      competitionRoundId: competitionRound.CompetitionRoundID
    });
  }

  createRound() {
    let modal = this.modalCtrl.create(CompetitionRoundCreatePage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionManagerPage');
  }

}
