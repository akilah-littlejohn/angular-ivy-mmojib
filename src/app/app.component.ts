import { Component, VERSION } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resultsTitleisMobile: boolean = false;
  constructor(public br: BreakpointObserver) {

    this.br.observe( '(max-width: 600px)' ).subscribe((result => {
      this.resultsTitleisMobile = false;
      if(result.matches){
        this.resultsTitleisMobile = true;
      };
    }))
  }
  resultsHeaderString = {
    mobile: 'Popular Searches',
    desktop: 'Tv Shows and Movies',
  };
}
