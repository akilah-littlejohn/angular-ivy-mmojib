import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  imports:      [ BrowserModule, FormsModule, LayoutModule ],
  declarations: [ AppComponent, SearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
