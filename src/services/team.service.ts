import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { IEnvConfiguration } from '../env-configuration/IEnvConfiguration';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamService extends BaseService {

  constructor(
    public http: HttpClient,
    private envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
  ) {
    super(envConfiguration);
  }

  getTeams(): Observable<Object[]> {
    return this.http.get(this.apiUrl + '/teams')
      .map(response => response as Object[]);
  }

  retrieveTeamLogo(teamId) {
    return this.http.get(this.apiUrl + '/teams/' + teamId + '/logo', { responseType: 'text'})
      .map(image => 'data:image/png;base64,' + image);
  }

}
