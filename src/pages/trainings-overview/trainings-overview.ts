import { Component, Injector } from '@angular/core';

import { TrainingService } from '../../services/training.service';
import { SessionService } from '../../services/session.service';
import { Observable } from 'rxjs/Observable';
import { Player } from '../../models/player';
import { PlayerTabsPage } from '../player-tabs/player-tabs';
import { BasePage } from '../base/base';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-trainings-overview',
  templateUrl: 'trainings-overview.html',
})
export class TrainingsOverviewPage extends BasePage {
  public trainingOverview: any[];

  constructor(
    injector: Injector,
    public trainingService: TrainingService
  ) {
    super(injector);
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
    let loading = this.loadingCtrl.create({
      content: 'Laden...'
    });
    
    loading.present();
    this.loadSeasonOverview().subscribe(result => loading.dismiss());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingsOverviewPage');
  }
}
