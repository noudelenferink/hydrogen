import { Component, Injector, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController, PopoverController, AlertController } from 'ionic-angular';
import { PlayerService } from '../../services/player.service';
//import { TrainingTeamPlayer } from './training-team-player';
import { BasePage } from '../base/base';
import { PlayerFullNamePipe } from '../../pipes/player-full-name/player-full-name';

@IonicPage()
@Component({
  selector: 'page-training-team-generator',
  templateUrl: 'training-team-generator.html',
})

export class TrainingTeamGeneratorPage extends BasePage {
  @Input() public workingset: TrainingTeamPlayer[];

  currentSeason: any;
  currentTeam: any;
  positionLines: PositionLine[];

  constructor(
    injector: Injector,
    public navCtrl: NavController,
    private playerService: PlayerService,
    public navParams: NavParams,
    private events: Events) {
    super(injector);
    this.currentSeason = this.session.currentSeason;
    this.currentTeam = this.session.currentTeam;
    this.positionLines = this.playerService.getPositionLines();
    this.positionLines.push({ PositionLineID: null, Code: null, Name: 'Overig' });
  }

  ionViewLoaded() {
    console.log('view loaded');
  }

  generateTeams() {
    var numTeams = 2;
    var teams = new Array(numTeams).fill(null).map((item, idx) => { return new TrainingTeam(idx + 1, `Team ${idx + 1}`) });
    var x = this.workingset.slice(0);

    var groupBy = function (xs, key) {
      return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };

    var grouped = groupBy(x, 'PositionLineID');
    var self = this;
    Object.keys(grouped).forEach(function (key, index) {
      // key: the name of the object key
      // index: the ordinal position of the key within the object 

      var group = grouped[key];
      while (group.length > 0) {
        var i = Math.floor(Math.random() * group.length);

        // Shuffle the teams to ensure the smallest team is selected randomly.
        teams = self.shuffleArray(teams);

        var teamSizes = teams.map(t => { return t.Players.filter(p => { return p.PositionLineID.toString() === key }).length });
        if (Array.from(new Set(teamSizes)).length === 1) {
          teamSizes = teams.map(t => { return t.Players.length });
        }
        var smallestTeamIdx = teamSizes.indexOf(Math.min(...teamSizes));

        // Add randomly selected player to smallest team.
        var newTeamPlayer = new TrainingTeamPlayer();
        newTeamPlayer.PlayerID = group[i].PlayerID;
        newTeamPlayer.Name = group[i].Name;

        // TODO - Refactor this ugly hack to ensure players without a position line are sorted last.
        newTeamPlayer.PositionLineID = group[i].PositionLineID ? group[i].PositionLineID : 999;
        teams[smallestTeamIdx].Players.push(newTeamPlayer);

        // Remove player from group.
        group.splice(i, 1);
      }
    });

    this.events.publish('teams-generated', teams);
  }

  removePlayer(player) {
    let alert = this.alertCtrl.create({
      title: 'Speler verwijderen',
      message: `Wil je speler <b>'${player.Name}'</b> uit de trainingsselectie verwijderen?`,
      buttons: [
        {
          text: 'Annuleren',
          role: 'cancel'
        },
        {
          text: 'Verwijderen',
          handler: () => {
            var idx = this.workingset.indexOf(player);
            this.workingset.splice(idx, 1);
          }
        }
      ]
    });
    alert.present();
  }

  editPlayer(player) {
    var positionLines = this.playerService.getPositionLines();
    var positionLineRadios = positionLines.map(pl => {
      return {
        type: 'radio',
        label: pl.Name,
        value: pl.PositionLineID.toString()
      }
    });
    let alert = this.alertCtrl.create({
      title: 'Positietype',
      inputs: positionLineRadios,
      buttons: [
        {
          text: 'Annuleren',
          role: 'cancel',
        },
        {
          text: 'Aanpassen',
          handler: result => {
            // Update the position line of the current player.
            player.PositionLineID = Number(result);
          }
        }
      ]
    });

    // Set the current position line of the selected player.
    alert.data.inputs.forEach(i => {
      i.checked = player.PositionLineID == i.value
    });

    alert.present();
  }

  addPlayer() {
    let alert = this.alertCtrl.create({
      title: 'Speler toevoegen',
      inputs: [{
        type: 'text',
        placeholder: 'Naam'
      }],
      buttons: [
        {
          text: 'Annuleren',
          role: 'cancel',
        },
        {
          text: 'Toevoegen',
          handler: result => {
            var newPlayer = new TrainingTeamPlayer();
            newPlayer.Name = result[0];
            newPlayer.PositionLineID = null;
            this.workingset.push(newPlayer);
            //this.workingset = this.workingset.slice(0);
          }
        }
      ]
    });

    alert.present();
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
}

export class TrainingTeam {
  public TeamNumber: number;
  public Name: string;
  public Players: TrainingTeamPlayer[];

  constructor(teamNumber: number, name: string) {
    this.TeamNumber = teamNumber;
    this.Name = name;
    this.Players = [];
  }
}

export class TrainingTeamPlayer {
  public PlayerID: number;
  public Name: string;
  public PositionLineID: number;
}

export class PositionLine {
  public PositionLineID: number;
  public Code: string;
  public Name: string;
}