import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfigService, User, HistoryItem } from '../../config/config.service';
import { Store } from '../../config/store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imgSrc: string;
  memeberLevelIconSrc: string;

  constructor(
    public navCtrl: NavController,
    private configService: ConfigService,
    private store: Store
  ) {
    this.imgSrc = 'assets/imgs/mock_profile.png';
    this.memeberLevelIconSrc = 'assets/imgs/bronze_icon.png';
    // this.id = setInterval(() => { this.getDataJson(); }, 10000);
  }

  ngOnInit(){
    // this.getDataJson();
  }

  ngOnDestroy() {
    // if (this.id) {
    //   clearInterval(this.id);
    // }
  }
}
