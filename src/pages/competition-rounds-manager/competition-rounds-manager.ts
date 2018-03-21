import { Component, Injector } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompetitionRoundManagerPage } from '../competition-round-manager/competition-round-manager';
import { CompetitionRoundCreatePage } from '../competition-round-create/competition-round-create';
import { BasePage } from '../base/base';
import { AuthService } from '../../services/auth.service';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'page-competition-rounds-manager',
  templateUrl: 'competition-rounds-manager.html',
})
export class CompetitionRoundsManagerPage extends BasePage {

  competitionRounds: Object[];
  currentSeason: any;
  currentTeam: any;
  currentCompetition: any

  constructor(
    injector: Injector,
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthService,
    public competitionService: CompetitionService) {
    super(injector);
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
    console.log('ionViewDidLoad CompetitionRoundsManagerPage');
  }

}
