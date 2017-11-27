import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, ModalController, Events } from 'ionic-angular';
import { SessionService } from '../../services/session.service';
import { TrainingService } from '../../services/training.service';
import { TrainingListItem } from '../../models/training-list-item';
import { TrainingsManagerPage } from '../trainings-manager/trainings-manager';
import { TrainingsManagerCreatePage } from '../trainings-manager-create/trainings-manager-create';

@IonicPage()
@Component({
  selector: 'page-trainings-manager-list',
  templateUrl: 'trainings-manager-list.html',
})
export class TrainingsManagerListPage {
  trainings: TrainingListItem[];
  currentTeam: { Id: number; Name: string; };
  currentSeason: { Id: number; Name: string; };

  constructor(
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private session: SessionService,
    private trainingService: TrainingService) {
    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();

    this.events.subscribe("training-saved", () => {
      console.log('training was saved, should refresh now');
      this.loadTrainingsList();
    });

    this.loadTrainingsList();
  }

  loadTrainingsList() {
    this.trainingService.getTrainings(this.currentSeason.Id, this.currentTeam.Id)
      .subscribe(result => this.trainings = result);
  }

  loadTraining(event, training) {
    this.app.getRootNav().push(TrainingsManagerPage, {
      trainingId: training.TrainingID
    });
  }

  createTraining() {
    let modal = this.modalCtrl.create(TrainingsManagerCreatePage);
    modal.present();
    modal.onDidDismiss(success => {
      if (success) {
        this.loadTrainingsList();
      }
    });
  }

  promptDelete(training) {
    var self = this;
    let confirm = this.alertCtrl.create({
      title: 'Training verwijderen',
      message: 'Weet je zeker dat je de geselecteerde training wilt verwijderen?',
      buttons: [
        {
          text: 'Annuleren',
          handler: () => { }
        },
        {
          text: 'Verwijderen',
          handler: () => {
            this.trainingService.deleteTraining(training.TrainingID).subscribe(function () {
              self.loadTrainingsList();
            })
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingsManagerListPage');
  }

}
