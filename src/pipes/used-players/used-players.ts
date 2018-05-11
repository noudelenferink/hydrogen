import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the UsedPlayerPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'usedPlayers',
})
export class UsedPlayersPipe implements PipeTransform {
  transform(value, args, currentValue) {
  	if (!value) { return value; }
    let usedPlayers = [].concat.apply([], args);
    return value.filter(player => {
      return usedPlayers.indexOf(player.PlayerID) === -1 || player.PlayerID === currentValue;
    });
  }
}
