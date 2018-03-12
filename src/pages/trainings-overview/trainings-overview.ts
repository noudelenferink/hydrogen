import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { TrainingService } from '../../services/training.service';
import { SessionService } from '../../services/session.service';
import { Observable } from 'rxjs/Observable';
import { Player } from '../../models/player';
import { PlayerTabsPage } from '../player-tabs/player-tabs';

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
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public session: SessionService,
    public trainingService: TrainingService
  ) {

  }

  refreshSeasonOverview(refresher) {
    this.loadSeasonOverview().subscribe(result => refresher.complete());
  }

  loadSeasonOverview() {
    return new Observable((observer) => {
      this.trainingService.getSeasonOverview(this.currentSeason.Id, this.currentTeam.Id)
        .subscribe(result => {
          this.trainingOverview = result;
          observer.next();
          observer.complete()
        });
    })
  }

  loadPlayer(event, player: Player) {
    this.app.getRootNav().push(PlayerTabsPage, {
      playerId: player.PlayerID
    });
  }

  ionViewWillEnter() {
    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();
    this.loadSeasonOverview().subscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingsOverviewPage');
  }
}
