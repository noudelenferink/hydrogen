import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { BasePage } from '../base/base';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { SoccerMatchEventCreatePage } from '../soccer-match-event-create/soccer-match-event-create';

@IonicPage()
@Component({
  selector: 'page-soccer-match-events-manager',
  templateUrl: 'soccer-match-events-manager.html',
})
export class SoccerMatchEventsManagerPage extends BasePage {
  public soccerMatchId: number;
  public soccerMatch: any;
  public soccerMatchEvents: any;

  constructor(
    injector: Injector,
    private events: Events,
    public soccerMatchService: SoccerMatchService
  ) {
    super(injector);

    this.soccerMatch = soccerMatchService.currentSoccerMatch;
    this.events.subscribe('loadedSoccerMatch', sm => {
      this.soccerMatch = soccerMatchService.currentSoccerMatch;
    });
  }

  ionViewWillEnter() {
    this.loadSoccerMatchEvents(this.soccerMatch.SoccerMatchID);
  }

  loadSoccerMatchEvents(soccerMatchId: number) {
    this.soccerMatchService.getSoccerMatchEvents(soccerMatchId)
      .subscribe(result => {
        this.soccerMatchEvents = result;
      });
  }

  isAwayTeamEvent(event) {
    return event.Team.TeamID == this.soccerMatch.AwayTeam.TeamID;
  }

  getEventName(eventType, isReference) {
    switch (eventType.EventTypeID) {
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

  createSoccerMatchEvent(team) {
    let modal = this.modalCtrl.create(SoccerMatchEventCreatePage, { soccerMatch: this.soccerMatch, team: team });
    modal.present();
    modal.onDidDismiss(success => {
      if (success) {
        this.loadSoccerMatchEvents(this.soccerMatch.SoccerMatchID);
      }
    }
    )
  }

  promptDelete(event) {
    let confirm = this.alertCtrl.create({
      title: 'Gebeurtenis verwijderen',
      message: 'Weet je zeker dat je de geselecteerde gebeurtenis wilt verwijderen?',
      buttons: [
        {
          text: 'Annuleren',
          handler: () => { }
        },
        {
          text: 'Verwijderen',
          handler: () => {
            this.soccerMatchService.deleteSoccerMatchEvent(this.soccerMatchId, event.SoccerMatchEventID).subscribe(result => {
              this.loadSoccerMatchEvents(this.soccerMatch.SoccerMatchID)
            })
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewCanEnter(): boolean {
    return this.auth.isAuthorized(["Manage_SoccerMatches"]);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SoccerMatchEventsManagerPage');
  }

}
