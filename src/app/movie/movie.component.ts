import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../service/movie-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  mostMoviesDisplay: any[] = []
  upcomingMoviesDisplay: any[] = []

  sliderTransform: number = 0;

  constructor(private _service: MovieApiService) { }

  ngOnInit() {
    this.getmostMoviesDisplay();
    this.getupcomingMoviesDisplay();
  }
  getmostMoviesDisplay() {
    this._service.mostMovies().subscribe((data: any) => {
      console.log(data); this.mostMoviesDisplay = data.results.slice(0, 12);
    });
  }

  getupcomingMoviesDisplay() {
    this._service.upcomingMovies().subscribe((data: any) => {
      console.log(data); this.upcomingMoviesDisplay = data.results.slice(0,12);
    });
  }

}
