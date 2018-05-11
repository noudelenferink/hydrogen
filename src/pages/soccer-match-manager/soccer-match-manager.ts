import { Component, Injector } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';
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
      homeGoals: [{value: ''}, Validators.required],
      awayGoals: [{value: ''}, Validators.required],
      note: [{value: ''}, Validators.nullValidator],
      isCanceled: [{value: ''}, Validators.nullValidator],
      fallbackDateTime: [{value: ''}, Validators.nullValidator]
    });

    this.soccerMatch = soccerMatchService.currentSoccerMatch;
    this.events.subscribe('loadedSoccerMatch', sm => {
      this.soccerMatch = soccerMatchService.currentSoccerMatch;
    });
  }

  ionViewWillEnter() {
  }

  loadSoccerMatch() {
    this.soccerMatchService.getSoccerMatch(this.soccerMatch.SoccerMatchID)
      .subscribe(result => {
        this.soccerMatch = result;
      });
  }

  saveSoccerMatch() {
    var updateData = {
      HomeGoals: this.soccerMatch.HomeGoals == '' ? null : this.soccerMatch.HomeGoals,
      AwayGoals: this.soccerMatch.AwayGoals == '' ? null : this.soccerMatch.AwayGoals,
      Note: this.soccerMatch.Note == '' ? null : this.soccerMatch.Note,
      IsCanceled: this.soccerMatch.isCanceled,
      FallbackDateTime: this.soccerMatch.FallbackDateTime
    }

    this.soccerMatchService.updateSoccerMatch(this.soccerMatch.SoccerMatchID, updateData)
      .subscribe(result => {
        this.loadSoccerMatch();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerMatchManagerPage');
  }

}
