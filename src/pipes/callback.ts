import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'positionType',
    pure: false
})
export class CallbackPipe implements PipeTransform {
    transform(input, path, positionTypeId) {
        return input.filter(positionType => {
            if (path) {
                return path.split('.').reduce((p, c) => p && p[c] || null, positionType) === positionTypeId;
            }
        });
    }
}