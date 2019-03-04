import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

import { EnvConfigurationProvider } from "gl-ionic2-env-configuration";
import { IEnvConfiguration } from "../env-configuration/IEnvConfiguration";
import { BaseService } from './base.service';

@Injectable()
export class CompetitionService extends BaseService {
  message: string;
  error: string;
  apiUrl: string;
  teamLogos: any[];

  constructor(
    private http: HttpClient,
    envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
  ) {
    super(envConfiguration);
    this.teamLogos = [];
  }

  getRanking(competitionId): Observable<Object[]> {
    return this.http.get(this.apiUrl + '/competitions/' + competitionId + '/ranking')
      .map(response => response as Object[]);
  }

  getSchedule(competitionId): Observable<Object[]> {
    return this.http.get(this.apiUrl + '/competitions/' + competitionId + '/schedule')
      .map(response => response as Object[]);
  }

  getScheduleForTeam(competitionId, teamId): Observable<Object[]> {
    return this.http.get(this.apiUrl + '/competitions/' + competitionId + '/schedule/' + teamId)
      .map(response => response as Object[]);
  }

  getCompetitionTeams(competitionId): Observable<any[]> {
    return this.http.get(this.apiUrl + '/competitions/' + competitionId + '/teams')
      .map(response => response as Object[]);
  }

  getResults(competitionId): Observable<Object[]> {
    return this.http.get(this.apiUrl + '/competitions/' + competitionId + '/results')
      .map(response => response as Object[]);
  }

  getResultsForTeam(competitionId, teamId): Observable<Object[]> {
    return this.http.get(this.apiUrl + '/competitions/' + competitionId + '/results/' + teamId)
      .map(response => response as Object[]);
  }

  getTeamLogo(teamId) {
    if (!(this.teamLogos.filter(item => item.id == teamId).length === 1)) {
      // this.retrieveTeamLogo(27)
      //   .then(result => {
      //     this.teamLogos.push({ id: teamId, logo: result });
      //     return result;
      //   })
      //   .catch(result => {
      //     var noTeamLogo = { id: teamId, logo: '../../assets/no_team_logo.png' };
      //     this.teamLogos.push(noTeamLogo);
      //     return noTeamLogo.logo;
      //   });
    }
    else {
      return this.teamLogos.filter(item => item.id == teamId)[0].logo;
    }
  }

  getCompetitionRounds(competitionId): Observable<Object[]> {
    return this.http.get(this.apiUrl + '/competitions/' + competitionId + '/rounds')
      .map(response => response as Object[]);
  }

  getCompetitionRound(competitionRoundId): Observable<Object> {
    return this.http.get(this.apiUrl + '/competition-rounds/' + competitionRoundId + '/soccer-matches')
      .map(response => response as Object);
  }

  getCompetitionTeamStats(competitionId: number, teamId: number): Observable<Object> {
    return this.http.get(this.apiUrl + '/competitions/' + competitionId + '/team-stats/' + teamId)
      .map(response => response as Object);
  }

  getMatchdays(seasonId) : Observable<Object[]> {
    return this.http.get(this.apiUrl + '/seasons/' + seasonId + '/matchdays')
      .map(response => response as Object[]);
  }

  createCompetitionRound(competitionRound) {
    return this.http.post(this.apiUrl + '/competitions/' + competitionRound.CompetitionID + '/competition-rounds', {competitionRound: competitionRound})
      .map(result => result);
  }

  createCompetitionTeam(competitionTeam) {
    return this.http.post(this.apiUrl + '/competitions/' + competitionTeam.CompetitionID + '/competition-teams', {competitionTeam: competitionTeam})
      .map(result => result);
  }
}