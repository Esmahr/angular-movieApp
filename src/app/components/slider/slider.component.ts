import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../service/movie-api.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {

  popularMoviesDisplay: any[]=[];
  sliderTransform : number = 0;

  constructor(private _service: MovieApiService) { }

  ngOnInit() {
    this.getpopularMoviesDisplay();
  }
  
  getpopularMoviesDisplay() {
    this._service.popularMovies().subscribe((data: any) => { 
      console.log(data); this.popularMoviesDisplay = data.results.slice(0, 18); 
    });
  }

  
}
