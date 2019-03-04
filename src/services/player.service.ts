import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { EnvConfigurationProvider } from "gl-ionic2-env-configuration";
import { IEnvConfiguration } from '../env-configuration/IEnvConfiguration';

import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Player } from '../models/player';
import { PositionLine } from '../pages/training-team-generator/training-team-generator';

@Injectable()
export class PlayerService extends BaseService {
    private positionLines: PositionLine[];
    constructor(
        private http: HttpClient,
        envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
    ) {

        super(envConfiguration);
        this.loadPositionLines();
    }

    getPlayers(seasonId: number, teamId: number): Observable<Player[]> {
        return this.http.post<Player[]>(this.apiUrl + '/players', { seasonID: seasonId, teamID: teamId })
            .map(result => result);
    }

    getPositionLines() {
        return this.positionLines.slice(0);
    }

    private loadPositionLines() {
        this.http.get<PositionLine[]>(this.apiUrl + '/players/position-lines')
            .map(result => result).subscribe(result => {
                this.positionLines = result;
            });
    }
}