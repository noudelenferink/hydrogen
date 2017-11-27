import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TrainingService } from '../../services/training.service';

@IonicPage()
@Component({
  selector: 'page-training-detail',
  templateUrl: 'training-detail.html',
})
export class TrainingDetailPage {
  private training: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public trainingService: TrainingService) {

      this.loadTraining();
  }

  loadTraining() {
    this.trainingService.getTraining(this.navParams.get('trainingId'))
      .subscribe(result => this.training = result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingDetailPage');
  }

}