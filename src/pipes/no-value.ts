import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noValue',
})
export class NoValuePipe implements PipeTransform {
    private DefaultNoValueChar = '-';
    transform(input, emptyValueChar?) {
        return input ? input : emptyValueChar ? emptyValueChar : this.DefaultNoValueChar;
    }
}