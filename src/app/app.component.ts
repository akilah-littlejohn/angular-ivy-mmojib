import { Component, VERSION } from '@angular/core';
import { PlatformLayoutService } from './platform-layout.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public pl: PlatformLayoutService) {}

  resultsHeaderString = {
    mobile: 'Popular Searches',
    desktop: 'Tv Shows and Movies',
  };
}
