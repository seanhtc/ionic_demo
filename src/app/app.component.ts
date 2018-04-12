import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { ConfigService, User, HistoryItem } from '../config/config.service';
import { Store } from '../config/store';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private store: Store,
    private configService: ConfigService
  ) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit(){
    this.getDataJson();
  }

  getDataJson(){
    this.configService.getConfig()
      .subscribe((apiData: any) => {
        let data:any = JSON.parse(apiData); // Sring to Object
        let now = new Date();
        let fomartNow = now.toLocaleDateString();
        let historyItem = new HistoryItem(false, 'Earn', data.data.Point, 'Check-in Mong Kok Shop', fomartNow);
        let user = new User(
          data.data.UserName, 
          data.data.EmailAddress, 
          data.data.Point, 
          data.data.RedeemPoint, 
          data.data.ScanEarnPoint,
          [historyItem]
        );
        this.store.user = user;
        if (user) {
          console.log('Get api success');
        }
      });
  }
}
