import { NgModule } from '@angular/core';
import { PlayerFullNamePipe } from './player-full-name/player-full-name';
import { OrderByPipe } from './order-by/order-by';
import { UsedTeamsPipe } from './used-teams/used-teams';
import { PrimaryEventFilterPipe } from './primary-only';
@NgModule({
	declarations: [
		PlayerFullNamePipe,
		OrderByPipe,
		UsedTeamsPipe,
		PrimaryEventFilterPipe
	],
	imports: [],
	exports: [
		PlayerFullNamePipe,
		OrderByPipe,
		UsedTeamsPipe,
		PrimaryEventFilterPipe
	]
})
export class PipesModule { }
