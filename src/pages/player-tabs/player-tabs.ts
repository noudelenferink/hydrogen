import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-player-tabs',
  templateUrl: 'player-tabs.html'
})
export class PlayerTabsPage {

  playerTrainingsRoot = 'PlayerTrainingsPage';

  constructor(public navCtrl: NavController, public auth: AuthService) { }

  ionViewCanEnter(): boolean {
    return this.auth.isAuthorized(["View_Players"]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerTabs');
  }
}