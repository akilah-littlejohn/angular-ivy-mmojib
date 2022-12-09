import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MovieData } from './movie-data';
@Injectable()
export class MovieapiService {

movieDataUrl:string = '';

  constructor(public hp:HttpClient) { }

getMovie(): Observable<MovieData[]> {
  return this.hp.get<MovieData[]>(this.movieDataUrl)
}
}