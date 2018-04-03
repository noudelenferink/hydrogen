import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { SoccerMatchService } from '../../services/soccer-match.service';

/**
 * Generated class for the SmEventsTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sm-events-test',
  templateUrl: 'sm-events-test.html',
})
export class SmEventsTestPage {
  //public soccerMatch: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private events: Events,
    public soccerMatchService: SoccerMatchService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmEventsTestPage');
  }

}
