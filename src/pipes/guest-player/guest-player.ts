import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GuestPlayerPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'guestPlayer',
})
export class GuestPlayerPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(input, args?) {
    return input.filter(soccerMatchPlayer => {
      return soccerMatchPlayer.IsGuest === args;
    });
  }
}
