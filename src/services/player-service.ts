import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { IEnvConfiguration } from '../env-configuration/IEnvConfiguration';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';
import { BaseService } from './base.service';

@Injectable()
export class PlayerService extends BaseService {

  constructor(
    public http: Http,
    private envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
  ) {
    super(envConfiguration);
  }

  getPlayers(seasonId: number, teamId: number) {
		return this.http.post(this.apiUrl + '/players', { seasonID: seasonId, teamID: teamId })
			.map(result => result.json());
  }
  
  getPlayerTrainings(playerId: number, seasonId: number) {
    return this.http.post(this.apiUrl + '/players/' + playerId + '/trainings', { seasonID: seasonId })
      .map(result => result.json());
  }
}
