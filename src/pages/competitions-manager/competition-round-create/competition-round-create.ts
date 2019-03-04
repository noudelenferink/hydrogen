import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionService } from '../../../services/session.service';
import { CompetitionService } from '../../../services/competition.service';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-competition-round-create',
  templateUrl: 'competition-round-create.html',
})
export class CompetitionRoundCreatePage {
  createCompetitionRoundForm: FormGroup;
  matchday: any;
  roundNumber: number;
  description: string;
  matchdays: Object[];

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public session: SessionService,
    public competitionService: CompetitionService
  ) {
    this.createCompetitionRoundForm = formBuilder.group({
      matchday: ['', Validators.required],
      roundNumber: ['', Validators.required],
      description: ['']
    });

    this.loadMatchdays();
  }

  createCompetitionRound() {
    if(!this.createCompetitionRoundForm.valid){
      return;
    }
    var newCompetitionRound = {
      'CompetitionID': this.session.currentCompetition.Id,
      'MatchdayID': this.matchday.MatchdayID,
      'RoundNumber': this.roundNumber,
      'Description': !this.description ? null : this.description
    };
    
    this.competitionService.createCompetitionRound(newCompetitionRound)
      .subscribe(result => this.dismiss(true));
  }

  loadMatchdays() {
    this.competitionService.getMatchdays(this.session.currentSeason.Id)
      .subscribe(result => this.matchdays = result);
  }

  dismiss(success) {
    this.viewCtrl.dismiss(success);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionRoundCreatePage');
  }

}
