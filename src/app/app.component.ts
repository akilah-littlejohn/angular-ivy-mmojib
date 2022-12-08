import { Component, VERSION } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public br:BreakpointObserver){}

resultsTitleisDeskTop:boolean = true;
isDeskTop = this.resultsTitleisDeskTop === true;
subscribeToObserver:Subscription;

  ngOninit(){
//this.subscribeToObserver = this.br.observe([])
}
resultsHeaderString = {
  mobile:"Popular Searches",
  desktop: "Tv Shows and Movies"
}
}
