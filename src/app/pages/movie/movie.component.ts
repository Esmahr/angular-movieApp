import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../service/movie-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  mostMoviesDisplay: any[] = []
  upcomingMoviesDisplay: any[] = []
  topMoviesDisplay: any[] = []
  popularMoviesDisplay: any[] = []

  headerTitle: string = "Home"

  sliderTransform: number = 0;

  constructor(private _service: MovieApiService) { }

  ngOnInit() {
    this.getmostMoviesDisplay();
    this.getupcomingMoviesDisplay();
    this.gettopMoviesDisplay();
    this.getpopularMoviesDisplay();
  }
  getmostMoviesDisplay() {
    this._service.mostMovies().subscribe((data: any) => {
      console.log(data); this.mostMoviesDisplay = data.results;
    });
  }

  getupcomingMoviesDisplay() {
    this._service.upcomingMovies().subscribe((data: any) => {
      console.log(data); this.upcomingMoviesDisplay = data.results;
    });
  }

  getpopularMoviesDisplay() {
    this._service.popularMovies().subscribe((data: any) => {
      console.log(data); this.popularMoviesDisplay = data.results;
    });
  }

  gettopMoviesDisplay() {
    this._service.topMovies().subscribe((data: any) => {
      console.log(data); this.topMoviesDisplay = data.results;
    });
  }

}
