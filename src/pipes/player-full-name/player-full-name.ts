import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerFullName',
})
export class PlayerFullNamePipe implements PipeTransform {
  /**
   * Takes a player object and returns their full name.
   */
  transform(value: any, args: string[]): any {
    if (!value || !value.FirstName || !value.Surname) return value;

    return value.FirstName + ' ' + (value.SurnamePrefix ? value.SurnamePrefix + ' ' : '') + value.Surname;
  }
}
