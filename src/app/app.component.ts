import { Component } from '@angular/core';
import {DataServiceService} from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
  }

  initRequest($event) {
    $event.preventDefault();
    console.log('sss');
  }
}
