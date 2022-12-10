import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultsview',
  templateUrl: './resultsview.component.html',
  styleUrls: ['./resultsview.component.css'],
})
export class ResultsviewComponent implements OnInit {
  movieResultsTitle = 'Dark';
  moviePoster: string = '';
  image: string =
    'https://res.cloudinary.com/akilah/image/upload/v1670706190/format-arw-PXjQaGxi4JA-unsplash_ewdwfk.jpg';
    
  constructor() {}

  ngOnInit() {}
}
