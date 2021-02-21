import { Component } from '@angular/core';

import { CommonServiceService } from './common-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheCloneWar';
  constructor(public CommonServiceService: CommonServiceService) {

  }
}
