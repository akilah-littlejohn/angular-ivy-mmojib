import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable()
export class PlatformLayoutService {

  resultsTitleisMobile: boolean = false;

  constructor(public br: BreakpointObserver) { 
    
    this.br.observe( '(max-width: 600px)' ).subscribe((result => {
      this.resultsTitleisMobile = false;
      if(result.matches){
        this.resultsTitleisMobile = true;
      };
    }))
  }

}