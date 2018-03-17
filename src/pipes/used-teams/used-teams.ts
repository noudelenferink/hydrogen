import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usedTeams',
})
export class UsedTeamsPipe implements PipeTransform {
  transform(value, args?) {
  	if (!value) { return value; }
    // ES6 array destructuring
    let usedTeams = [].concat.apply([], args);
    return value.filter(team => {
      return usedTeams.indexOf(team.TeamID) === -1;
    });
  }
}
