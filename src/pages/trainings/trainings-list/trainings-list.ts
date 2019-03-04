import { Component, Injector } from '@angular/core';

import { TrainingService } from '../../../services/training.service';
import { TrainingListItem } from '../../../models/training-list-item';
import { TrainingDetailPage } from '../training-detail/training-detail';

import { Observable } from 'rxjs/Observable';
import { BasePage } from '../../base/base';
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
    console.log('Constructor TrainingListPage')
  }

  refreshTrainingsList(refresher) {
    this.loadTrainingsList().subscribe(null, null, () => refresher.complete());
  }

  loadTrainingsList() {
    return new Observable((observer) => {
      this.trainingService.getTrainings(this.session.currentSeason.Id, this.session.currentTeam.Id)
        .subscribe(result => {
          this.trainings = result;
          observer.next();
          observer.complete()
        }, error => {
          let toast = this.toastCtrl.create({
            message: 'Het ophalen van de trainingen is mislukt.',
            duration: 3000,
            position: 'bottom'
          });
          toast.present();
          observer.complete();
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
    this.loadTrainingsList()
      .subscribe(null, null, () => loading.dismiss());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingsListPage');
  }
}
