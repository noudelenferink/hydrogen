import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class SessionService {

  constructor(private auth: AuthService) { }
  
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