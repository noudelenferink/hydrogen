import { NgModule } from '@angular/core';
import { PlayerFullNamePipe } from './player-full-name/player-full-name';
import { OrderByPipe } from './order-by/order-by';
//import { UsedTeamsPipe } from './used-teams/used-teams';
@NgModule({
	declarations: [
		PlayerFullNamePipe,
    	OrderByPipe,
		//UsedTeamsPipe
	],
	imports: [],
	exports: [
		PlayerFullNamePipe,
		OrderByPipe,
  //  UsedTeamsPipe
	]
})
export class PipesModule {}
