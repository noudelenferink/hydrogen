import { Storage } from '@ionic/storage';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';

import { EnvConfigurationProvider } from "gl-ionic2-env-configuration";
import { IEnvConfiguration } from "../env-configuration/IEnvConfiguration";
import { BaseService } from './base.service';

@Injectable()
export class SoccerMatchService extends BaseService {
	constructor(
		private authHttp: AuthHttp,
		private http: Http,
		private envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
	) {
		super(envConfiguration);
	}

  getSoccerMatch(soccerMatchId) {
    return this.http.get(this.apiUrl + '/soccer-matches/' + soccerMatchId)
      .map(result => {
        var soccerMatch = result.json();
        if(soccerMatch.SoccerMatchStatusID === 'CAN') {
          soccerMatch.isCanceled = true;
        };

        return soccerMatch;
      });
  }

  updateSoccerMatch(soccerMatchId, updateData) {
    return this.http.post(this.apiUrl + '/soccer-matches/' + soccerMatchId, {soccerMatch : updateData})
      .map(result => result.json());
  }

  createSoccerMatch(soccerMatch) {
    return this.http.post(this.apiUrl + '/soccer-matches', {soccerMatch : soccerMatch})
      .map(result => result.json());
  }

  getEventTypes() {
    return this.http.get(this.apiUrl + '/event-types')
      .map(result => result.json());
  }

  deleteSoccerMatch(soccerMatchId: number) {
    return this.http.delete(this.apiUrl + '/soccer-matches/' + soccerMatchId)
      .map(response => response.json() as Object);
  }

  getSoccerMatchEvents(soccerMatchId) {
return this.http.get(this.apiUrl + '/soccer-matches/' + soccerMatchId + '/events')
      .map(result => result.json());
  }

  createSoccerMatchEvent(soccerMatchId, soccerMatchEvent) {
    return this.http.post(this.apiUrl + '/soccer-matches/' + soccerMatchId + '/events', {event : soccerMatchEvent})
      .map(result => result.json());
  }

  deleteSoccerMatchEvent(soccerMatchId, soccerMatchEventId) {
    return this.http.delete(this.apiUrl + '/soccer-matches/' + soccerMatchId + '/events/' + soccerMatchEventId)
      .map(result => result.json());
  }
}