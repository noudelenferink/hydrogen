import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'primaryOnly'
})

export class PrimaryEventFilterPipe implements PipeTransform {
transform(input, args?) {
    return input.filter(eventType => {
      if(args) {
        return eventType.ReferenceEventTypeID === args;
      } else {
        return eventType.IsPrimary;
      }
    });
  }
}