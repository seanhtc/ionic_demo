import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { DateTime } from 'ionic-angular';

@Injectable()
export class ConfigService {
  configUrl =  'http://sonycrm.azurewebsites.net/SonyCrmService.svc/rest/LogEvent?memberId=465b158c-541c-e511-80d3-3863bb347ba8&storeId=54af44ee-cd1d-e811-a94e-000d3a35f53a&campaignId=e86cd356-ef1d-e811-a94e-000d3a35f53a';

  // dataItem= [];


  constructor(
    private http: HttpClient
  ) {
    
  }

  getConfig() {
   return this.http.get(this.configUrl);
  }
}

export class User {
  // public dataItem = [];
  constructor(
    public UserName: string, 
    public EmailAddress: string,
    public Point: number,
    public RedeemPoint: number,
    public ScanEarnPoint: number,
    public DataItem:any = []
  ) {}
}

export class HistoryItem {
  // public dataItem = [];
  constructor(
    public theme: boolean,
    public type: string,
    public Point: number,
    public description: string,
    public Date: string
  ) {}
}