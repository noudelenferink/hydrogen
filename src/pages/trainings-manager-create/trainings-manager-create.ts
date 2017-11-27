import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { SessionService } from '../../services/session.service';
import { TrainingService } from '../../services/training.service';
import { TrainingCreateModel } from '../../models/training-create-model';

@IonicPage()
@Component({
  selector: 'page-trainings-manager-create',
  templateUrl: 'trainings-manager-create.html',
})
export class TrainingsManagerCreatePage {
  isBonus: boolean;
  currentTeam: { Id: number; Name: string; };
  currentSeason: { Id: number; Name: string; };
  trainingDate: string;
  today: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public auth: AuthService,
    public session: SessionService,
    public trainingService: TrainingService) {
    this.today = new Date().toISOString();
    this.trainingDate = this.today;
    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();
  }

  dismiss(success) {
    this.viewCtrl.dismiss(success);
  }

  createTraining() {
    let newTraining = new TrainingCreateModel(this.currentSeason.Id, this.currentTeam.Id,);
    newTraining.TrainingDate = new Date(new Date(this.trainingDate).setUTCHours(0,0,0,0));
    newTraining.IsBonus = this.isBonus;
    this.trainingService.createTraining(newTraining)
      .subscribe(result => this.dismiss(true));
  }

  iognViewCanEnter(): boolean {
    return this.auth.isAuthorized(["Manage_Trainings"]);
  }
}
