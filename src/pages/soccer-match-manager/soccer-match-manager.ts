import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../base/base';

@IonicPage()
@Component({
  selector: 'page-soccer-match-manager',
  templateUrl: 'soccer-match-manager.html',
})
export class SoccerMatchManagerPage extends BasePage {
  soccerMatchId: number;
  manageSoccerMatchForm: FormGroup;
  public soccerMatch: any;

  constructor(
    injector: Injector,
    public formBuilder: FormBuilder,
    private events: Events,
    public soccerMatchService: SoccerMatchService) {
    super(injector);
    this.manageSoccerMatchForm = formBuilder.group({
      homeGoals: ['', Validators.required],
      awayGoals: ['', Validators.required],
      isCanceled: ['', Validators.nullValidator],
      fallbackDateTime: ['', Validators.nullValidator]
    });

    this.soccerMatch = soccerMatchService.currentSoccerMatch;
    this.events.subscribe('loadedSoccerMatch', sm => {
      this.soccerMatch = soccerMatchService.currentSoccerMatch;
    });
  }

  ionViewWillEnter() {
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
