import { Component } from '@angular/core';
// import { ConfigService, User } from '../../config/config.service';
// import { Store } from '../../config/store';

@Component({
  selector: 'page-success',
  templateUrl: 'success.html'
})
export class SuccessPage {

  earnPoints: number;
  imgSrc: string;
  
  constructor(
  ) {
    this.earnPoints = 500;
    this.imgSrc = 'assets/imgs/mock_profile.png';
  }

  ngOnInit(){
  }
}
