import { ViewController } from "ionic-angular/navigation/view-controller";
import { Component } from "@angular/core";

@Component({
    templateUrl: './training-player-edit.html'
})

export class TrainingPlayerEditPage {
    constructor(private viewCtrl: ViewController) {        
    }

    dismiss() {
        this.viewCtrl.dismiss();
      }
}