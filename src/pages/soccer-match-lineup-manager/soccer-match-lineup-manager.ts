import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { BasePage } from '../base/base';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { PlayerService } from '../../services/player-service';
import { SoccerMatchPlayerManagerPage } from '../soccer-match-player-manager/soccer-match-player-manager';
import { UsedPlayersPipe } from '../../pipes/used-players/used-players';
@IonicPage()
@Component({
  selector: 'page-soccer-match-lineup-manager',
  templateUrl: 'soccer-match-lineup-manager.html',
})
export class SoccerMatchLineupManagerPage extends BasePage {
  homeAway: any;
  awayTeamPlayers: any;
  homeTeamPlayers: any;
  formations: any;
  lineups: any;
  soccerMatch: any;
  homeLineup;
  awayLineup;

  constructor(
    injector: Injector,
    private events: Events,
    public playerService: PlayerService,
    public soccerMatchService: SoccerMatchService
  ) {
    super(injector);

    this.soccerMatch = soccerMatchService.currentSoccerMatch;
    this.events.subscribe('loadedSoccerMatch', sm => {
      this.soccerMatch = soccerMatchService.currentSoccerMatch;
    });
  }

  ionViewWillEnter() {
    this.loadFormations();
    this.loadSoccerMatchLineup();
  }

  noSubs(homeAway) {
    if(this.homeAway === 'H'){
      return new UsedPlayersPipe().transform(this.homeTeamPlayers, this.getUsedPlayers(this.homeLineup), null).length === 0;
    } else{
      return new UsedPlayersPipe().transform(this.awayTeamPlayers, this.getUsedPlayers(this.awayLineup), null).length === 0;
    }
    
  }

  loadSoccerMatchLineup() {
    this.soccerMatchService.getSoccerMatchLineups(this.soccerMatch.SoccerMatchID)
      .subscribe(result => {
        this.lineups = result;
        this.homeAway = 'H';

        this.homeLineup = this.mapLineup(this.lineups.HomeTeam);
        this.awayLineup = this.mapLineup(this.lineups.AwayTeam);

        this.loadTeamPlayers(this.soccerMatch.HomeTeam.TeamID)
          .subscribe(result => {
            this.homeTeamPlayers = result;
          });

        this.loadTeamPlayers(this.soccerMatch.AwayTeam.TeamID)
          .subscribe(result => {
            this.awayTeamPlayers = result;
          });
      })
  }

  saveSoccerMatchLineup() {
    switch (this.homeAway) {
      case 'H':
        this.updateSoccerMatchLineup(this.lineups.HomeTeam.FormationID, 'home', this.homeLineup);
        break;
      case 'A':
        this.updateSoccerMatchLineup(this.lineups.AwayTeam.FormationID, 'away', this.awayLineup);
        break;
    }
  }

  updateSoccerMatchLineup(formationId, homeAway, lineup) {
    var updateData = {
      FormationID: formationId,
      Positions: lineup
        .filter(position => {
          return position.PlayerID !== null;
        })
        .map(position => {
          return {
            PlayerID: position.PlayerID,
            PositionID: position.PositionID
          }
        })
    };
    this.soccerMatchService.saveSoccerMatchLineup(this.soccerMatch.SoccerMatchID, homeAway, updateData)
      .subscribe(result => {
        console.log(result);
      })
  }

  loadTeamPlayers(teamId: number) {
    return this.soccerMatchService.getSoccerMatchPlayers(this.soccerMatch.SoccerMatchID, teamId)
  }

  loadFormations() {
    this.soccerMatchService.getFormations()
      .subscribe(result => {
        this.formations = result;
      })
  }

  mapLineup(teamPositions: any) {
    if(!teamPositions.FormationID) {
      return;
    }

    var lineup = [];
    var formation = this.formations.find(f => f.FormationID === teamPositions.FormationID);

    formation.FormationPositions.forEach(fp => {
      var lineupPos = {
        PositionID: fp.Position.PositionID,
        Code: fp.Code,
        Name: fp.Name,
        PlayerID: null
      }

      var playerPos = teamPositions.Players.find(p => p.PlayerSoccerMatch && p.PlayerSoccerMatch.PositionID == fp.Position.PositionID);

      if (playerPos) {
        lineupPos.PlayerID = playerPos.PlayerID;
      }

      lineup.push(lineupPos);
    });

    return lineup;
  }

  managePlayers(teamId: number) {
    let modal = this.modalCtrl.create(SoccerMatchPlayerManagerPage, { teamId: teamId, soccerMatchId: this.soccerMatch.SoccerMatchID });
    modal.present();
  }

  getPositionType(this, positionTypeId: number) {
    return this.Position.PositionTypeID === positionTypeId;
  }

  getUsedPlayers(lineup) {
    if(!lineup) {
      return;
    }

    return lineup.filter(position => {
      return position.PlayerID
    }).map(position => {
      return position.PlayerID;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerMatchFormationManagerPage');
  }

}
