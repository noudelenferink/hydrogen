export class TrainingCreateModel {
    SeasonID: number;
    TeamID: number;
    TrainingDate: Date;
    IsBonus: boolean = false;

    constructor(seasonId: number, teamId: number) {
		this.SeasonID = seasonId;
		this.TeamID = teamId;
    }
}