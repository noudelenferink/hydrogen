import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-soccer-match-manager',
  templateUrl: 'soccer-match-manager.html',
})
export class SoccerMatchManagerPage {
  soccerMatchId: number;
  manageSoccerMatchForm: FormGroup;
  soccerMatch: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public soccerMatchService: SoccerMatchService) {
    this.manageSoccerMatchForm = formBuilder.group({
      homeGoals: ['', Validators.required],
      awayGoals: ['', Validators.required],
      isCanceled: ['', Validators.nullValidator],
      fallbackDateTime: ['', Validators.nullValidator]
    });

    this.soccerMatchId = this.navParams.get('soccerMatchId');
  }

  ionViewWillEnter() {
    this.loadSoccerMatch();
  }

  loadSoccerMatch() {
    this.soccerMatchService.getSoccerMatch(this.soccerMatchId)
      .subscribe(result => {
        this.soccerMatch = result;
      });
  }

  saveSoccerMatch() {
    var updateData = {
      HomeGoals: this.soccerMatch.HomeGoals == '' ? null : this.soccerMatch.HomeGoals,
      AwayGoals: this.soccerMatch.AwayGoals == '' ? null : this.soccerMatch.AwayGoals,
      IsCanceled: this.soccerMatch.isCanceled,
      FallbackDateTime: this.soccerMatch.FallbackDateTime
    }

    this.soccerMatchService.updateSoccerMatch(this.soccerMatchId, updateData)
      .subscribe(result => {
        this.loadSoccerMatch();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerMatchManagerPage');
  }

}
