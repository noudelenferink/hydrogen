import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamService } from '../../../services/team.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BasePage } from '../../base/base';
import { CompetitionService } from '../../../services/competition.service';

@IonicPage()
@Component({
  selector: 'page-competition-team-create',
  templateUrl: 'competition-team-create.html',
})
export class CompetitionTeamCreatePage extends BasePage {
  createCompetitionTeamForm: FormGroup;
  teams: Object[];
  team: any;
  defaultStartTime: string;
  constructor(
    injector: Injector,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    private teamService: TeamService,
    private competitionService: CompetitionService) {
      super(injector);
    this.createCompetitionTeamForm = formBuilder.group({
      team: ['', Validators.required],
      defaultStartTime: ['', Validators.required]
    });
    this.teamService.getTeams().subscribe(result => this.teams=result);
  }

  createCompetitionTeam() {
    if(!this.createCompetitionTeamForm.valid){
      return;
    }
    var newCompetitionTeam = {
      'CompetitionID': this.currentCompetition.Id,
      'TeamID': this.team.TeamID,
      'DefaultStartTime': this.defaultStartTime
    };
    
    this.competitionService.createCompetitionTeam(newCompetitionTeam)
      .subscribe(result => this.dismiss(true));
  }

  dismiss(success) {
    this.viewCtrl.dismiss(success);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetitionTeamCreatePage');
  }

}
