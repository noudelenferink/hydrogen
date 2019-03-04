import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'positionLine',
    pure: false
})
export class PositionLineFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items) {
            return items;
        }
        
        return items.filter(item => {return item.PositionLineID == filter});
    }
}