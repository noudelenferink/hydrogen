import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {AuthService} from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-trainings-tabs',
  templateUrl: 'trainings-tabs.html'
})
export class TrainingsTabsPage {

  trainingsOverviewRoot = 'TrainingsOverviewPage'
  trainingsListRoot = 'TrainingsListPage'


  constructor(public navCtrl: NavController, public auth: AuthService) {}

  ionViewCanEnter(): boolean{
    return this.auth.isAuthorized(["View_Trainings"]);
   }
}