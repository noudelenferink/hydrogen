import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { SessionService } from '../../../services/session.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { TrainingService } from '../../../services/training.service';
import { TrainingAttendee } from '../../../models/training-attendee';
import { PlayerService } from '../../../services/player.service';
import { Player } from '../../../models/player';

@IonicPage()
@Component({
  selector: 'page-training-manager',
  templateUrl: 'training-manager.html',
})
export class TrainingManagerPage {
  currentTeam: { Id: number; Name: string; };
  currentSeason: { Id: number; Name: string; };
  trainingId: number;
  training: any;
  attendees: TrainingAttendee[];
  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    public events: Events,
    private session: SessionService,
    private trainingService: TrainingService,
    private playerService: PlayerService
  ) {
    this.trainingId = this.navParams.get('trainingId');
    this.currentSeason = this.session.currentSeason;
    this.currentTeam = this.session.currentTeam;
    this.loadTrainingAndPlayers();
  }

  loadTrainingAndPlayers(): any {
    var self = this;
    Observable.forkJoin([
       this.trainingService.getTraining(this.trainingId),
       this.playerService.getPlayers(this.currentSeason.Id, this.currentTeam.Id)
    ]).subscribe(([training, players]: [Object, Player[]]) => {
        self.training = training;
        self.attendees = players.map(function(player) {
          var attendee = new TrainingAttendee();
          attendee.Player = player as Player;
          attendee.HasAttended = self.training.Attendees.some(function(a) {
            return a.PlayerID === attendee.Player.PlayerID;
          })

          return attendee;
        });
    });
  }

  toggleAttendence(attendee) {
    attendee.Modified = !attendee.Modified;
  }

  saveTraining() {
    var attendedPlayerIDs = this.attendees.filter(p => p.HasAttended).map(a => a.Player.PlayerID);
    this.trainingService.updateAttendees(this.trainingId, attendedPlayerIDs)
      .subscribe(result => { 
        this.events.publish("training-saved");
        this.navCtrl.pop(); 
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingManagerPage');
  }

}
