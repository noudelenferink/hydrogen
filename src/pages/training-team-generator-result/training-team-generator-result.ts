import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-training-team-generator-result',
  templateUrl: 'training-team-generator-result.html',
})

export class TrainingTeamGeneratorResultPage {
  @Input() result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  ngOnInit() {
  }
}
