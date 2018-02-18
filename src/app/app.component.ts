import { Component } from '@angular/core';
import {DataServiceService} from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = undefined;

  constructor(private dataService: DataServiceService) {
  }

  initRequest(mid) {
    this.dataService.getData(mid).subscribe(data => this.data = data['rulesProcessing']);
  }
}
