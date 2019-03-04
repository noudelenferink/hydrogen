import { BaseService } from "./base.service";
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { IEnvConfiguration } from "../env-configuration/IEnvConfiguration";
import { EnvConfigurationProvider } from "gl-ionic2-env-configuration";
import { Storage} from "@ionic/storage";

@Injectable()
export class TestService extends BaseService {
    accessToken: any;
    /**
     *
     */
    constructor(
        envConfiguration: EnvConfigurationProvider<IEnvConfiguration>,
        private http: HttpClient,
        private storage: Storage) {
        super(envConfiguration);
    }

    getApiTest() {
        // Use authHttp to access secured routes
        return this.http.get(this.apiUrl + '/trainings/2', {
        }).map(res => res);
    }
}