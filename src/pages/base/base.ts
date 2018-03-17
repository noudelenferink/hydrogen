import { Injector } from '@angular/core';
import { AlertController, NavController, LoadingController, ViewController, ModalController, App } from "ionic-angular";
import { SessionService } from '../../services/session.service';
//import { Storage} from "@ionic/storage";

export abstract class BasePage {
  currentTeam: { Id: number; Name: string; };
  currentSeason: { Id: number; Name: string; };

  public app: App;
  public navCtrl: NavController;
  public alertCtrl: AlertController;
  public loadingCtrl: LoadingController;
  public viewCtrl: ViewController;
  //public storage:Storage;
  public modalCtrl: ModalController;
  public spinner: any;
  public session: SessionService;
  constructor(
    injector: Injector
  ) {
    this.viewCtrl = injector.get(ViewController);
    this.navCtrl = injector.get(NavController);
    this.alertCtrl = injector.get(AlertController);
    this.loadingCtrl = injector.get(LoadingController);
    //this.storage = injector.get(Storage);
    this.modalCtrl = injector.get(ModalController);
    this.session = injector.get(SessionService);
    this.app = injector.get(App);

    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();

  }
}