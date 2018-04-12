import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ConfigService, User, HistoryItem } from '../../config/config.service';
import { Store } from '../../config/store';

@Component({
  selector: 'page-earn',
  templateUrl: 'earn.html'
})
export class EarnPage {

  imgSrc: string;
  // earnPoints: number;

  constructor(
    public navCtrl: NavController,
    private configService: ConfigService,
    public alertCtrl: AlertController,
    private store: Store
  ) {
    this.imgSrc = 'assets/imgs/mock_profile.png';
    this.store.user.ScanEarnPoint -= 500;
  }

  handleEarnClick(type){
    let now = new Date();
    let fomartNow = now.toLocaleDateString();
    if (type === 'fb') {
      this.store.user.Point += 500;
      let alert = this.alertCtrl.create({
        title: 'Liked Facebook offical page!',
        buttons: ['OK']
      });
      alert.present();
      this.store.user.DataItem.push(
        new HistoryItem(false, 'Earned', 500, 'Liked Offical Facebook Fans Page', fomartNow)
      );
    } 
    else if (type === 'optin') {
      this.store.user.Point += 500;
      let alert = this.alertCtrl.create({
        title: 'Opt-in success!',
        buttons: ['OK']
      });
      alert.present();
      this.store.user.DataItem.push(
        new HistoryItem(false, 'Earned', 500, 'Opt-in success', fomartNow)
      );
    }
  }
}
