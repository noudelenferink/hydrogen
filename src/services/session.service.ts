import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }
  
    public getCurrentSeason() {
      return {Id: 5, Name: '2017/2018'};
    }
  
    public getCurrentTeam() {
      return {Id: 27, Name: 'Bornerbroek 4'};
    }
  
    public getCurrentCompetition() {
      return {Id: 16, Name: 'Competitie - 6e klasse 24'}
    }

}