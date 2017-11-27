import { NgModule } from '@angular/core';
import { PlayerFullNamePipe } from './player-full-name/player-full-name';
import { OrderByPipe } from './order-by/order-by';
@NgModule({
	declarations: [PlayerFullNamePipe,
    OrderByPipe],
	imports: [],
	exports: [PlayerFullNamePipe,
    OrderByPipe]
})
export class PipesModule {}
