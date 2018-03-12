import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

import { TrainingService } from '../../services/training.service';
import { TrainingListItem } from '../../models/training-list-item';
import { TrainingDetailPage } from '../training-detail/training-detail';
import { SessionService } from '../../services/session.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-trainings-list',
  templateUrl: 'trainings-list.html',
})
export class TrainingsListPage {
  currentTeam: { Id: number; Name: string; };
  currentSeason: { Id: number; Name: string; };

  private trainings: TrainingListItem[];

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public session: SessionService,
    public trainingService: TrainingService
  ) {
  }

  refreshTrainingsList(refresher) {
    this.loadTrainingsList().subscribe(result => refresher.complete());
  }

  loadTrainingsList() {
    return new Observable((observer) => {
        this.trainingService.getTrainings(this.currentSeason.Id, this.currentTeam.Id).subscribe(result => {
          this.trainings = result;
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
    this.loadTrainingsList().subscribe();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingsListPage');
  }

}
