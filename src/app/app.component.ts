import { Component, VERSION } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public br: BreakpointObserver) {}

  resultsTitleisDesk: boolean = false;

  ngOninit() {
    console.log(this.resultsTitleisDesk)
    this.br.observe(Breakpoints.Large).subscribe((result => {
      this.resultsTitleisDesk = false;
      if(result.matches){
        this.resultsTitleisDesk = true;
      };
      console.log("Large")
    }))
  }
  resultsHeaderString = {
    mobile: 'Popular Searches',
    desktop: 'Tv Shows and Movies',
  };
}
