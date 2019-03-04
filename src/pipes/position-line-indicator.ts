import { Pipe, PipeTransform } from '@angular/core';
import { PlayerService } from '../services/player.service';

@Pipe({
    name: 'positionLineIndicator',
})
export class PositionLineIndicatorPipe implements PipeTransform {
    private NoValueChar = '-';

    constructor(private playerService: PlayerService) {
    }

    transform(input) {
        if(input && input.PositionLineID) {
            var positionLine =  this.getPositionLine(input.PositionLineID);
            return positionLine ? positionLine.Code : this.NoValueChar
        }        
    }

    getPositionLine(positionLineId) {
        var positionLines = this.playerService.getPositionLines();
        return positionLines.find(pl => { return pl.PositionLineID === positionLineId });
    }

}