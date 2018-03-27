import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base/base';
import { SoccerMatchService } from '../../services/soccer-match.service';
import { SoccerMatchEventCreatePage } from '../soccer-match-event-create/soccer-match-event-create';

@IonicPage()
@Component({
  selector: 'page-soccer-match-events-manager',
  templateUrl: 'soccer-match-events-manager.html',
})
export class SoccerMatchEventsManagerPage extends BasePage {
  soccerMatchId: number;
  soccerMatch: any;
  soccerMatchEvents: any;

  constructor(
    injector: Injector,
    public soccerMatchService: SoccerMatchService
  ) {
    super(injector);
  }

  ionViewWillLoad() {
    this.soccerMatch = this.navParams.get('soccerMatch');
    this.soccerMatchId = this.soccerMatch.SoccerMatchID;
    this.loadSoccerMatchEvents();
  }

  loadSoccerMatchEvents() {
    this.soccerMatchService.getSoccerMatchEvents(this.soccerMatchId)
      .subscribe(result => {
        this.soccerMatchEvents = result;
      });
  }

  isAwayTeamEvent(event) {
    return event.Team.TeamID == this.soccerMatch.AwayTeam.TeamID;
  }

  createSoccerMatchEvent(team) {
    let modal = this.modalCtrl.create(SoccerMatchEventCreatePage, { soccerMatchId: this.soccerMatchId, team: team });
    modal.present();
    modal.onDidDismiss(success => {
      if (success) {
        this.loadSoccerMatchEvents();
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
              this.loadSoccerMatchEvents();
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
