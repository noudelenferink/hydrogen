import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IEnvConfiguration } from '../env-configuration/IEnvConfiguration';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TeamService extends BaseService {

  constructor(
    public http: Http,
    private envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
  ) {
    super(envConfiguration);
  }

  getTeams(): Observable<Object[]> {
    return this.http.get(this.apiUrl + '/teams')
      .map(response => response.json() as Object[]);
  }

  retrieveTeamLogo(teamId) {
    return this.http.get(this.apiUrl + '/teams/' + teamId + '/logo')
      .map(image => 'data:image/png;base64,' + image.text());
  }

}
