import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { EnvConfigurationProvider } from "gl-ionic2-env-configuration";
import { IEnvConfiguration } from '../env-configuration/IEnvConfiguration';

import { BaseService } from './base.service';
import { PlayerTrainingAttendence } from '../models/player-training-attendence';
import { TrainingListItem } from '../models/training-list-item';
import { TrainingCreateModel } from '../models/training-create-model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrainingService extends BaseService {
	constructor(
		private http: HttpClient,
		envConfiguration: EnvConfigurationProvider<IEnvConfiguration>
	) {
		super(envConfiguration);
	}

	getSeasonOverview(seasonId: number, teamId: number): Observable<PlayerTrainingAttendence[]> {
		return this.http.post<PlayerTrainingAttendence[]>(this.apiUrl + '/trainings/overview', { seasonID: seasonId, teamID: teamId })
			.map(result => result)
			.catch((err) => {
				// Do messaging and error handling here
				return Observable.throw(err)
			});
	}

	getTrainings(seasonId: number, teamId: number): Observable<TrainingListItem[]> {
		return this.http.post<TrainingListItem[]>(this.apiUrl + '/trainings', { seasonID: seasonId, teamID: teamId })
			.map(result => result);
	}

	getTraining(trainingId: number) {
		return this.http.get(this.apiUrl + '/trainings/' + trainingId)
			.map(result => result);
	}

	updateAttendees(trainingId: number, attendees: number[]) {
		return this.http.post(this.apiUrl + '/trainings/' + trainingId + '/attendees', { attendees: attendees })
			.map(result => result);
	}

	createTraining(newTraining: TrainingCreateModel) {
		return this.http.post(this.apiUrl + '/trainings/create', { training: newTraining })
			.map(result => result);
	}

	deleteTraining(trainingId: number) {
		return this.http.delete(this.apiUrl + '/trainings/' + trainingId)
			.map(result => result);
	}
}