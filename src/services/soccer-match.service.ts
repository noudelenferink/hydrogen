import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { IEnvConfiguration } from '../env-configuration/IEnvConfiguration';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SoccerMatchService extends BaseService {

    public currentSoccerMatch: any;
    constructor(
        public http: HttpClient,
        private envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
    ) {
        super(envConfiguration);
    }

    getSoccerMatch(soccerMatchId) {
        return this.http.get(this.apiUrl + '/soccer-matches/' + soccerMatchId)
            .map(result => {
                var soccerMatch = result as any;
                if (soccerMatch.SoccerMatchStatusID === 'CAN') {
                    soccerMatch.isCanceled = true;
                };
                this.currentSoccerMatch = soccerMatch;
                return soccerMatch;
            });
    }

    updateSoccerMatch(soccerMatchId, updateData) {
        return this.http.post(this.apiUrl + '/soccer-matches/' + soccerMatchId, { soccerMatch: updateData })
            .map(result => result);
    }
}
