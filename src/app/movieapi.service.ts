import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class MovieapiService {

movieDataUrl:string = '';

  constructor(hp:HttpClient) { }

}