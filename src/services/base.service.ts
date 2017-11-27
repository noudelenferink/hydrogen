import { Injectable, Injector, NgZone } from '@angular/core';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';
import { IEnvConfiguration } from '../env-configuration/IEnvConfiguration';

@Injectable()
export class BaseService {
  apiUrl: string;
  
  constructor(
    envConfiguration:EnvConfigurationProvider<IEnvConfiguration>
  ) {
    let config: IEnvConfiguration = envConfiguration.getConfig();
    this.apiUrl = config.apiUrl;
  }
}