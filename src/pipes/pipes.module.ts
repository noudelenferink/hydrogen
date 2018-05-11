import { NgModule } from '@angular/core';
import { PlayerFullNamePipe } from './player-full-name/player-full-name';
import { OrderByPipe } from './order-by/order-by';
import { UsedTeamsPipe } from './used-teams/used-teams';
import { PrimaryEventFilterPipe } from './primary-only';
import { PositionTypePipe } from './position-type';
import { GuestPlayerPipe } from './guest-player/guest-player';
import { UsedPlayersPipe } from './used-players/used-players';
@NgModule({
	declarations: [
		PlayerFullNamePipe,
		OrderByPipe,
		PositionTypePipe,
		UsedTeamsPipe,
		PrimaryEventFilterPipe,
		GuestPlayerPipe,
    UsedPlayersPipe
	],
	imports: [],
	exports: [
		PlayerFullNamePipe,
		OrderByPipe,
		PositionTypePipe,
		UsedTeamsPipe,
		PrimaryEventFilterPipe,
		GuestPlayerPipe,
    UsedPlayersPipe
	],
	providers: [PlayerFullNamePipe] 
})
export class PipesModule { }
