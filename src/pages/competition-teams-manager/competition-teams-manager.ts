import { Component, Injector } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompetitionService } from '../../services/competition.service';
import { BasePage } from '../base/base';
import { CompetitionTeamCreatePage } from '../competition-team-create/competition-team-create';

@Component({
  selector: 'page-competition-teams-manager',
  templateUrl: 'competition-teams-manager.html',
})
export class CompetitionTeamsManagerPage extends BasePage {
  competitionTeams : Object[];
  constructor(injector: Injector, public navCtrl: NavController, public navParams: NavParams, public competitionService: CompetitionService) {
    super(injector);
  }
  ionViewWillEnter() {
    this.loadCompetitionTeams();
  }

  loadCompetitionTeams() {
    this.competitionService.getCompetitionTeams(this.currentCompetition.Id)
      .subscribe(result => this.competitionTeams = result);
  }

  addCompetitionTeam() {
    let modal = this.modalCtrl.create(CompetitionTeamCreatePage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionTeamsManagerPage');
  }

}
