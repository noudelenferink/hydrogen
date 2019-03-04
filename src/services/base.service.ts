import { Injectable, Injector } from '@angular/core';
import { EnvConfigurationProvider } from 'gl-ionic2-env-configuration';
import { IEnvConfiguration } from '../env-configuration/IEnvConfiguration';

@Injectable()
export class BaseService {
  apiUrl: string;
  envConfig: IEnvConfiguration;
  constructor(
    envConfiguration:EnvConfigurationProvider<IEnvConfiguration>
  ) {
    this.envConfig = envConfiguration.getConfig();
    this.apiUrl = this.envConfig.apiUrl;
  }
}