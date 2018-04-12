import { Component } from '@angular/core';

import { EarnPage } from '../earn/earn';
import { ScanPage } from '../scan/scan';
import { AboutPage } from '../about/about';
import { RedeemPage } from '../redeem/redeem';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ScanPage;
  tab4Root = EarnPage;
  tab5Root = RedeemPage;

  constructor() {

  }
}
