import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SuccessPage } from '../pages/success/success';
import { EarnPage } from '../pages/earn/earn';
import { ScanPage } from '../pages/scan/scan';
import { AboutPage } from '../pages/about/about';
import { RedeemPage } from '../pages/redeem/redeem';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ConfigService } from '../config/config.service';
import { Store } from '../config/store';

@NgModule({
  declarations: [
    MyApp,
    EarnPage,
    ScanPage,
    AboutPage,
    RedeemPage,
    HomePage,
    TabsPage,
    SuccessPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpClientJsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EarnPage,
    ScanPage,
    AboutPage,
    RedeemPage,
    HomePage,
    TabsPage,
    SuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    ConfigService,
    Store
  ]
})
export class AppModule {}
