import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }
  
    public getCurrentSeason() {
      return {Id: 6, Name: '2018/2019'};
    }
  
    public getCurrentTeam() {
      return {Id: 27, Name: 'Bornerbroek 4'};
    }
  
    public getCurrentCompetition() {
      return {Id: 16, Name: 'Competitie - 6e klasse 24'}
    }

}