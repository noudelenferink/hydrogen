import { Component, Injector } from '@angular/core';

import { TrainingService } from '../../../services/training.service';
import { Observable } from 'rxjs/Observable';
//import { Player } from '../../../models/player';
//import { PlayerTabsPage } from '../../player-tabs/player-tabs';
import { BasePage } from '../../base/base';
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
    this.loadSeasonOverview().subscribe(null, null, () => refresher.complete());
  }

  loadSeasonOverview() {
    return new Observable((observer) => {
      this.trainingService.getSeasonOverview(this.session.currentSeason.Id, this.session.currentTeam.Id)
        .subscribe(result => {
          this.trainingOverview = result;
          observer.next();
          observer.complete()
        }, error => {
          let toast = this.toastCtrl.create({
            message: 'Het ophalen van het seizoensoverzicht is mislukt.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          observer.complete();
        });
    })
  }

  // loadPlayer(event, player: Player) {
  //   this.app.getRootNav().push(PlayerTabsPage, {
  //     playerId: player.PlayerID
  //   });
  // }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Laden...'
    });

    loading.present();
    this.loadSeasonOverview()
      .subscribe(null, null, () => loading.dismiss());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingsOverviewPage');
  }
}
