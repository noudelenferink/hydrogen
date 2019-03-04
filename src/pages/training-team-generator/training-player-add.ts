import { ViewController } from "ionic-angular/navigation/view-controller";
import { Component } from "@angular/core";

@Component({
    templateUrl: './training-player-add.html'
})

export class TrainingPlayerAddPage {
    constructor(private viewCtrl: ViewController) {        
    }

    dismiss() {
        this.viewCtrl.dismiss();
      }
}