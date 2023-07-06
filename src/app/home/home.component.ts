import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostMoviesDisplay: any[] = []
  genreMoviesDisplay: any[] = []
  sliderTransform: number = 0;

  constructor(private _service: MovieApiService) { }

  ngOnInit() {
    this.getmostMoviesDisplay();
    this.getgenreMoviesDisplay();
  }

  getmostMoviesDisplay() {
    this._service.mostMovies().subscribe((data: any) => {
      console.log(data); this.mostMoviesDisplay = data.results.slice(0, 5);
    });
  }

  getgenreMoviesDisplay(){
    this._service.genreMovies().subscribe((data: any) => {
      console.log(data); this.genreMoviesDisplay = data.genres.slice(0, 18);
    });
  }
}



