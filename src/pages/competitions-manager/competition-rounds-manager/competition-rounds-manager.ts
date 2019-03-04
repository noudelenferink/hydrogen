import { Component, Injector, ViewChild } from '@angular/core';
import { NavController, NavParams, Select } from 'ionic-angular';
import { CompetitionRoundManagerPage } from '../competition-round-manager/competition-round-manager';
import { CompetitionRoundCreatePage } from '../competition-round-create/competition-round-create';
import { BasePage } from '../../base/base';
import { AuthService } from '../../../services/auth.service';
import { CompetitionService } from '../../../services/competition.service';
import { SessionMetadata } from '../../../models/session-metadata';

@Component({
  selector: 'page-competition-rounds-manager',
  templateUrl: 'competition-rounds-manager.html',
})
export class CompetitionRoundsManagerPage extends BasePage {
  @ViewChild('competitionSelect') competitionSelect: Select;
  competitions: SessionMetadata[];

 public doFilter(){
    this.competitionSelect.open();
 }

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
    this.currentSeason = this.session.currentSeason;
    this.currentTeam = this.session.currentTeam;
    this.currentCompetition = this.session.currentCompetition;
    this.competitions = this.session.competitions;
  }

  ionViewWillEnter() {
    this.loadCompetitionRounds();
  }

  loadCompetitionRounds() {
    this.competitionService.getCompetitionRounds(this.currentCompetition.Id)
      .subscribe(result => this.competitionRounds = result);
  }

  competitionChange(ev) {
    this.session.currentCompetition = ev;
  }

  loadCompetitionRound(event, competitionRound) {
    this.app.getRootNav().push(CompetitionRoundManagerPage, {
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
