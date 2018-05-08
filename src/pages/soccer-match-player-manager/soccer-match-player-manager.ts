import { Component, Injector, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base/base';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { PlayerService } from '../../services/player-service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { NgZone } from '@angular/core';
import { SelectSearchable}  from 'ionic-select-searchable';
import { PlayerFullNamePipe } from '../../pipes/player-full-name/player-full-name';
/**
 * Generated class for the SoccerMatchPlayerManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soccer-match-player-manager',
  templateUrl: 'soccer-match-player-manager.html',
})
export class SoccerMatchPlayerManagerPage extends BasePage {
  public soccerMatchPlayers: Array<any>;
  public soccerMatchId: number;
  public teamId: number;
  public foundPlayers: Array<any>;
  public playerToAdd: any;

  constructor(
    injector: Injector,
    private changeDetectorRef: ChangeDetectorRef,
    public soccerMatchService: SoccerMatchService,
    public playerService: PlayerService,
    private playerFullNamePipe: PlayerFullNamePipe) {
    super(injector);
  }

  ionViewWillLoad() {
    this.soccerMatchId = this.navParams.get('soccerMatchId');
    this.teamId = this.navParams.get('teamId');

    this.loadSoccerMatchPlayers();
  }

  loadSoccerMatchPlayers() {
    // First load the players already linked to this match
    this.soccerMatchService.getSoccerMatchPlayers(this.soccerMatchId, this.teamId)
      .subscribe(existingPlayers => {
        // Then load players that belong to the selected team
        this.playerService.getPlayers(this.currentSeason.Id, this.teamId)
          .subscribe(teamPlayers => {
            this.mapSoccerMatchPlayers(existingPlayers, teamPlayers);
          });
      });
  }

  saveSoccerMatchPlayers() {
    var saveData = this.soccerMatchPlayers.filter(player => {
      return player.HasAttended;
      }).map(player => {
        return player.PlayerID as number;
      });
    this.soccerMatchService.saveSoccerMatchPlayers(this.soccerMatchId, this.teamId, saveData)
      .subscribe(result => {
          this.viewCtrl.dismiss();
      });
  }

  addPlayer(player) {
    var copy = Array.from(this.soccerMatchPlayers);
    copy.push({
      PlayerID: player.PlayerID,
      FirstName: player.FirstName,
      Surname: player.Surname,
      SurnamePrefix: player.SurnamePrefix,
      HasAttended: true,
      IsGuest: true
    });
    this.soccerMatchPlayers = copy;

    this.playerToAdd = null;
  }

  removePlayer(player: any) {
    // Not sure why direct splice is not working. Perhaps use an Observable?
    var copy = Array.from(this.soccerMatchPlayers);
    const index = copy.indexOf(player);
    copy.splice(index, 1);
    this.soccerMatchPlayers = copy;
  }

  findPlayers(event: { component: SelectSearchable, text: string }) {
    // set val to the value of the ev target
    var searchText = event.text;
    if (searchText && searchText.length >= 3) {
      event.component.isSearching = true;
      this.playerService.findPlayers(searchText, this.currentSeason.Id, [ this.teamId ])
        .subscribe(result => {
          result.forEach(player => {
            player.FullName = this.playerFullNamePipe.transform(player, null);
          });
          event.component.items = result;
          event.component.isSearching = false;
        });
    } else {
      this.foundPlayers = null;
    }
  }

  mapSoccerMatchPlayers(existingPlayers: any, teamPlayers: any) {
    this.soccerMatchPlayers = [];

    teamPlayers.forEach(teamPlayer => {
      var player = {
        PlayerID: teamPlayer.PlayerID,
        FirstName: teamPlayer.FirstName,
        Surname: teamPlayer.Surname,
        SurnamePrefix: teamPlayer.SurnamePrefix,
        HasAttended: existingPlayers.find(smp => smp.PlayerID === teamPlayer.PlayerID),
        IsGuest: false
      }
      this.soccerMatchPlayers.push(player);
    });

    existingPlayers.forEach(smp => {
      if (!teamPlayers.find(tp => tp.PlayerID === smp.PlayerID)) {
        this.soccerMatchPlayers.push({
          PlayerID: smp.PlayerID,
          FirstName: smp.FirstName,
          Surname: smp.Surname,
          SurnamePrefix: smp.SurnamePrefix,
          HasAttended: true,
          IsGuest: true
        });
      }
    });
  }
}