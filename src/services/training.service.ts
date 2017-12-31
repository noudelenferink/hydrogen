import { Injectable } from '@angular/core';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { EnvConfigurationProvider } from "gl-ionic2-env-configuration";
import { IEnvConfiguration } from "../env-configuration/IEnvConfiguration";

import { BaseService } from './base.service';
import { PlayerTrainingAttendence } from '../models/player-training-attendence';
import { TrainingListItem } from '../models/training-list-item';
import { TrainingCreateModel } from '../models/training-create-model';

@Injectable()
export class TrainingService extends BaseService {
	//apiUrl: string
	constructor(
		private authHttp: AuthHttp,
		private http: Http,
		private envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
	) {
		super(envConfiguration);
	}

	test() {
		console.log('button pressed from service!');
		return this.http.get('http://xps-13-nick:3000/trainings/1')
			.map(result => result.json());
	}

	getSeasonOverview(seasonId: number, teamId: number): Observable<PlayerTrainingAttendence[]> {
		console.debug(`getting season overview for season ${seasonId} and team ${teamId}`);

		return this.http.post(this.apiUrl + '/trainings/overview', { seasonID: seasonId, teamID: teamId })
			.map(result => result.json());
	}

	getTrainings(seasonId: number, teamId: number): Observable<TrainingListItem[]> {
		console.debug(`getting list of trainings for season ${seasonId} and team ${teamId}`);
		return this.http.post(this.apiUrl + '/trainings', { seasonID: seasonId, teamID: teamId })
			.map(result => result.json());
	}

	getTraining(trainingId: number) {
		console.debug(`getting training ${trainingId}`);
		return this.http.get(this.apiUrl + '/trainings/' + trainingId)
			.map(result => result.json());
	}

	updateAttendees(trainingId: number, attendees: number[]) {
		console.debug(`updating training ${trainingId} attendees`);
		return this.http.post(this.apiUrl + '/trainings/' + trainingId + '/attendees', { attendees: attendees })
			.map(result => result.json());
	}

	createTraining(newTraining: TrainingCreateModel) {
		return this.http.post(this.apiUrl + '/trainings/create', { training: newTraining })
			.map(result => result.json());
	}

	deleteTraining(trainingId: number) {
		return this.http.delete(this.apiUrl + '/trainings/' + trainingId)
			.map(result => result.json());
	}
}