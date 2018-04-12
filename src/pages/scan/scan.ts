import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ConfigService, User, HistoryItem } from '../../config/config.service';
import { Store } from '../../config/store';
import { SuccessPage } from '../success/success';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  
  scannedCode = null;
  config: {};
  location: any;

  public barcodeData;

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner, 
    private configService: ConfigService,
    private store: Store
  ) {
  }

  ionViewDidLoad(){
    //this.scanCode()
    this.redirect();
  }
 
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      this.redirect();
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  redirect() {
    this.store.user.Point += 500;
    let now = new Date();
    let fomartNow = now.toLocaleDateString();
    this.store.user.DataItem.push(
      new HistoryItem(false, 'Scan and check-in', 500, 'Causeway Bay Shop', fomartNow)
    );
    this.navCtrl.setRoot(SuccessPage);
  }
}
