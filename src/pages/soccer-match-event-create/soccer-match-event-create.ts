import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base/base';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { PlayerService } from '../../services/player-service';

@IonicPage()
@Component({
  selector: 'page-soccer-match-event-create',
  templateUrl: 'soccer-match-event-create.html',
})
export class SoccerMatchEventCreatePage extends BasePage {
  soccerMatchId: number;
  currentTeam: any;
  currentSeason: any;
  eventTypes: any[];
  team: any;
  eventData: any;
  eventPlayerOptions: any[];

  constructor(
    injector: Injector,
    public soccerMatchService: SoccerMatchService,
    public playerService: PlayerService

  ) {
    super(injector);
  }

  ionViewWillLoad() {
    this.eventData = {};
    this.soccerMatchId = this.navParams.get('soccerMatchId');
    this.team = this.navParams.get('team');
    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();

    this.getEventTypes();
    this.getTeamPlayers();
  }

  dismiss(success) {
    this.viewCtrl.dismiss(success);
  }

  getTeamPlayers() {
    this.playerService.getPlayers(this.currentSeason.Id, this.team.TeamID).subscribe(result => {
      this.team.Players = result;
    });

  }

  getEventTypes() {
    this.soccerMatchService.getEventTypes().subscribe(result => {
      this.eventTypes = result;
    })
  }

  changePrimaryEventType(newValue) {
    var f = new PrimaryEventFilterPipe();
    this.eventData.referenceEvents = f.transform(this.eventTypes, newValue);
  }

  getEventName(eventType, isReference) {
    switch (eventType.EventID) {
      case 2:
        if (isReference) {
          return 'Tweede geel';
        } else {
          break;
        }
      case 4:
        if (isReference) {
          return 'Wissel IN';
        } else {
          return 'Wissel UIT'
        }
    }

    return eventType.Name;
  }

  createSoccerMatchEvent() {
    let newSoccerMatchEvent = {
      Minute: parseInt(this.eventData.minute),
      TeamID: this.team.TeamID,
      EventTypeID: this.eventData.eventTypeId,
      PlayerID: this.eventData.playerId,
      References: []
    }

    this.eventData.referenceEvents.filter(this.enabledReferences).forEach(ref => {
      newSoccerMatchEvent.References.push({
        EventTypeID: ref.EventTypeID,
        PlayerID: ref.IsSamePlayerAsReference ? this.eventData.playerId : ref.playerId
      });
    })

    this.soccerMatchService.createSoccerMatchEvent(this.soccerMatchId, newSoccerMatchEvent)
      .subscribe(result => this.dismiss(true));
  }

  enabledReferences(referenceEvent) {
    return referenceEvent.isEnabled;
  }

  ionViewCanEnter(): boolean {
    return this.auth.isAuthorized(["Manage_SoccerMatches"]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerMatchEventCreatePage');
  }

}

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