import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ConfigService, User, HistoryItem } from '../../config/config.service';
import { Store } from '../../config/store';

@Component({
  selector: 'page-redeem',
  templateUrl: 'redeem.html'
})
export class RedeemPage {

  imgSrc: string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private configService: ConfigService,
    public store: Store
  ) {
    this.imgSrc = 'assets/imgs/redeem.jpg';
  }

  redeem() {
    let alert = this.alertCtrl.create({
      title: 'Redeem Success!',
      buttons: ['OK']
    });
    alert.present();
    this.store.user.Point -= this.store.user.RedeemPoint;
    this.getUpdateHistory();
  }

  getUpdateHistory() {
    let now = new Date();
    let fomartNow = now.toLocaleDateString();
    this.store.user.DataItem.push(
      new HistoryItem(true, 'Redeem', 2500, "Redeemed Product", fomartNow)
    );
  }
}
