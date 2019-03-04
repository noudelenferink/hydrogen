import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IEnvConfiguration } from '../env-configuration/IEnvConfiguration';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AuthService } from './auth.service';
import { Events } from 'ionic-angular';
import { SessionMetadata, BaseData } from '../models/session-metadata';

@Injectable()
export class SessionService extends BaseService {
  public currentSeason: SessionMetadata = null;
  public currentTeam: SessionMetadata = null;
  public currentCompetition: SessionMetadata = null;
  public competitions: SessionMetadata[];

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private events: Events,
    private authService: AuthService,
    envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
  ) {
    super(envConfiguration);
  }

  public loadSession() {
    this.authService.user;

    return this.loadUserSettings(1);
  }

  public loadUserSettings(userId: number) {
    return this.http.get<any>(this.apiUrl + `/users/${userId}/settings`)
      .map(result => {
        this.currentSeason = result.Seasons.filter(s => {
          return s.IsDefault;
        })[0];

        this.currentTeam = result.Teams.filter(t => {
          return t.IsDefault;
        })[0];

        this.currentCompetition = result.Competitions.filter(c => {
          return c.IsDefault;
        })[0];

        this.competitions = result.Competitions.map(c => {
          var comp =  new SessionMetadata();
          comp.Id = c.Id;
          comp.Name = c.Name;
          comp.IsDefault = c.IsDefault;
          comp.Type = new BaseData(c.Type.Id, c.Type.Name);

          return comp;
        });

        return result;
      });
  }

}