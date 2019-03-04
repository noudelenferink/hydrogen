import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, Events } from 'ionic-angular';
import { TrainingTeamGeneratorPage, TrainingTeamPlayer } from '../training-team-generator/training-team-generator';
import { TrainingTeamGeneratorResultPage } from '../training-team-generator-result/training-team-generator-result';
import { ViewChild } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { BasePage } from '../base/base';
import { Player } from '../../models/player';
import { PlayerFullNamePipe } from '../../pipes/player-full-name/player-full-name';

@IonicPage()
@Component({
  selector: 'page-training-team-generator-tabs',
  templateUrl: 'training-team-generator-tabs.html',
})

export class TrainingTeamGeneratorTabsPage extends BasePage {
  @ViewChild(Tabs) tabs: Tabs;
  resultTabParams = {};
  trainingTeamGeneratorPlayersRoot = TrainingTeamGeneratorPage;
  trainingTeamGeneratorResultRoot = TrainingTeamGeneratorResultPage;
  currentPage: string;
  generatorResult: any;
  currentSeason: any;
  currentTeam: any;
  players: any;
  trainingPlayers: any[];

  constructor(
    injector: Injector,
    events: Events,
    navCtrl: NavController,
    private playerService: PlayerService,
    private playerFullNamePipe: PlayerFullNamePipe) {
    super(injector);
    this.currentSeason = this.session.currentSeason;
    this.currentTeam = this.session.currentTeam;
    this.loadPlayers();

    events.subscribe('teams-generated', data => {
      this.generatorResult = data;
      this.currentPage = 'teams';
    });
  }

  loadPlayers() {
    this.playerService.getPlayers(this.currentSeason.Id, this.currentTeam.Id)
      .subscribe(result => {
        this.currentPage = 'players';
        this.groupPlayersToPositionLines(result);
      });
  }

  groupPlayersToPositionLines(players: Player[]) {
    this.trainingPlayers = [];
    players.forEach(player => {
      var x = new TrainingTeamPlayer();
      x.Name = this.playerFullNamePipe.transform(player);
      x.PositionLineID = player.DefaultPositionLineID;
      
      this.trainingPlayers.push(x);
    })
  }
}
