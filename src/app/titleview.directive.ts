import { Directive } from '@angular/core';
import { 
   Input } from '@angular/core'; // First, import Input

@Directive({
  selector: '[appTitleview]',
  host: {
    '[style.background-color]': "'#ff44cc'",
    '[style.padding]': "'0.1em 0.2em'",
    '[style.margin-top]': "'0.1em'",
  },
})
export class TitleviewDirective {

  constructor() { }

}