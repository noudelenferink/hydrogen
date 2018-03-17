import { Component, Injector } from '@angular/core';

import { TrainingService } from '../../services/training.service';
import { TrainingListItem } from '../../models/training-list-item';
import { TrainingDetailPage } from '../training-detail/training-detail';

import { Observable } from 'rxjs/Observable';
import { BasePage } from '../base/base';
import { IonicPage } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-trainings-list',
  templateUrl: 'trainings-list.html',
})
export class TrainingsListPage extends BasePage {
  private trainings: TrainingListItem[];

  constructor(
    injector: Injector,
    public trainingService: TrainingService
  ) {
    super(injector);
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
    let loading = this.loadingCtrl.create({
      content: 'Laden...'
    }); 
    
    loading.present();
    this.loadTrainingsList().subscribe(result => loading.dismiss());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingsListPage');
  }
}
