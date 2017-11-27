import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TrainingService } from '../../services/training.service';
import { SessionService } from '../../services/session.service';

@IonicPage()
@Component({
  selector: 'page-trainings-overview',
  templateUrl: 'trainings-overview.html',
})
export class TrainingsOverviewPage {
  currentTeam: { Id: number; Name: string; };
  currentSeason: { Id: number; Name: string; };
  public trainingOverview: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public session: SessionService,
    public trainingService: TrainingService
  ) {
    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();
    this.loadSeasonOverview();
  }

  loadSeasonOverview() {
    this.trainingService.getSeasonOverview(this.currentSeason.Id, this.currentTeam.Id)
      .subscribe(result => { this.trainingOverview = result });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingsOverviewPage');
  }
}
