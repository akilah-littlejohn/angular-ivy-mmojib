import { Component, VERSION } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public br:BreakpointObserver){}

  ngOninit(){
    this.br.observe(['(min-width: 500px)'])
  }
}
