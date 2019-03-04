import { NgModule } from '@angular/core';
import { PlayerFullNamePipe } from './player-full-name/player-full-name';
import { OrderByPipe } from './order-by/order-by';
import { UsedTeamsPipe } from './used-teams/used-teams';
import { PrimaryEventFilterPipe } from './primary-only';
import { PositionTypePipe } from './position-type';
import { GuestPlayerPipe } from './guest-player/guest-player';
import { UsedPlayersPipe } from './used-players/used-players';
import { PositionLineFilterPipe } from './position-line-filter';
import { NoValuePipe } from './no-value';
import { PositionLineIndicatorPipe } from './position-line-indicator';
@NgModule({
	declarations: [
		PlayerFullNamePipe,
		OrderByPipe,
		PositionTypePipe,
		PositionLineFilterPipe,
		PositionLineIndicatorPipe,
		UsedTeamsPipe,
		PrimaryEventFilterPipe,
		GuestPlayerPipe,
		UsedPlayersPipe,
		NoValuePipe,
	],
	imports: [],
	exports: [
		PlayerFullNamePipe,
		OrderByPipe,
		PositionTypePipe,
		PositionLineFilterPipe,
		PositionLineIndicatorPipe,
		UsedTeamsPipe,
		PrimaryEventFilterPipe,
		GuestPlayerPipe,
		UsedPlayersPipe,
		NoValuePipe
	],
	providers: [PlayerFullNamePipe] 
})
export class PipesModule { }
