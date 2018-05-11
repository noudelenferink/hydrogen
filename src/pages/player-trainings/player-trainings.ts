import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../../services/session.service';
import { PlayerService } from '../../services/player-service';
import { TrainingDetailPage } from '../training-detail/training-detail';

@IonicPage()
@Component({
  selector: 'page-player-trainings',
  templateUrl: 'player-trainings.html',
})
export class PlayerTrainingsPage {
  currentTeam: { Id: number; Name: string; };
  currentSeason: { Id: number; Name: string; };
  private playerTrainings: any;

  constructor(
    private app: App,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public session: SessionService, 
    public playerService: PlayerService) {
  }

  refreshTrainings(refresher) {
    this.loadTrainings().subscribe(result => refresher.complete());
  }

  loadTrainings() {
    return new Observable((observer) => {
      this.playerService.getPlayerTrainings(this.navParams.get('playerId'), this.currentSeason.Id).subscribe(result => {
        this.playerTrainings = result;
        observer.next();
        observer.complete()
      });
    })
  }

  loadTraining(event, training) {
    this.app.getRootNav().push(TrainingDetailPage, {
      trainingId: training.TrainingID
    });
  }

  ionViewWillEnter() {
    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();
    this.loadTrainings().subscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerTrainingsPage');
  }

}
