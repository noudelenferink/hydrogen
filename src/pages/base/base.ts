import { Injector } from '@angular/core';
import { AlertController, NavController, LoadingController, ViewController, ModalController, App, ToastController, NavParams } from "ionic-angular";
import { SessionService } from '../../services/session.service';
import { AuthService } from '../../services/auth.service';
//import { Storage} from "@ionic/storage";

export abstract class BasePage {
  currentCompetition: { Id: number; Name: string; };
  currentTeam: { Id: number; Name: string; };
  currentSeason: { Id: number; Name: string; };

  public app: App;
  public navCtrl: NavController;
  public navParams: NavParams;
  public alertCtrl: AlertController;
  public toastCtrl: ToastController;
  public loadingCtrl: LoadingController;
  public viewCtrl: ViewController;
  //public storage:Storage;
  public modalCtrl: ModalController;
  public spinner: any;
  public auth: AuthService;
  public session: SessionService;
  constructor(
    injector: Injector
  ) {
    this.viewCtrl = injector.get(ViewController);
    this.navCtrl = injector.get(NavController);
    this.navParams = injector.get(NavParams);
    this.alertCtrl = injector.get(AlertController);
    this.toastCtrl = injector.get(ToastController);
    this.loadingCtrl = injector.get(LoadingController);
    //this.storage = injector.get(Storage);
    this.modalCtrl = injector.get(ModalController);
    this.session = injector.get(SessionService);
    this.auth = injector.get(AuthService);
    this.app = injector.get(App);

    this.currentSeason = this.session.getCurrentSeason();
    this.currentTeam = this.session.getCurrentTeam();
    this.currentCompetition = this.session.getCurrentCompetition();
  }
}