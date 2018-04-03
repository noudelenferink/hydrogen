import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
@Component({
	selector: 'app-team-logo',
	templateUrl: './team-logo.html',
	providers: [TeamService]
})

export class TeamLogoComponent implements OnInit {
	@Input() teamId: number;
	@Input() width: string = '40px';
	@Input() height: string = '40px';
	
	binaryImage: string;
	loading: boolean;
	constructor(private teamService: TeamService) { }

	ngOnInit() {
		this.binaryImage = 'data:image/png;base64,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';

		this.teamService.retrieveTeamLogo(this.teamId).subscribe(result => {
				this.loading = true;
				this.binaryImage = result;
				setTimeout(x => {this.loading = false}, 100);
			});
	}
}
