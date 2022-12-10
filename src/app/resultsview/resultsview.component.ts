import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultsview',
  templateUrl: './resultsview.component.html',
  styleUrls: ['./resultsview.component.css'],
})
export class ResultsviewComponent implements OnInit {
  movieResultsTitle = 'Dark';
  moviePoster: string = '';

  constructor() {}

  ngOnInit() {}
}
