import { Directive } from '@angular/core';
import { 
   Input } from '@angular/core'; // First, import Input

@Directive({
  selector: '[appTitleview]'
})
export class TitleviewDirective {

  constructor() { }
@Input() displaystyle

}