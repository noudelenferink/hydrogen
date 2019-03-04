import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CompetitionRoundsManagerPage } from '../competition-rounds-manager/competition-rounds-manager';
import { CompetitionTeamsManagerPage } from '../competition-teams-manager/competition-teams-manager';

@IonicPage()
@Component({
  selector: 'page-competition-manager',
  templateUrl: 'competition-manager.html',
})
export class CompetitionManagerPage {
  competitionRoundsManagerRoot = CompetitionRoundsManagerPage;
  competitionTeamsManagerRoot = CompetitionTeamsManagerPage;
}
