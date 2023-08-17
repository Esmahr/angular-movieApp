import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../service/movie-api.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  headerTitle: string = "Watch List"
  savedMovies: any[] = [];
  movieDetails: any[] = [];
  movieId: string = "";
  removeMovies: any[] = [];
  removeIcon = '../../../assets/Vector.svg"';

  constructor(private dataService: MovieApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.savedMovies = JSON.parse(localStorage.getItem('movies') || '[]');
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.savedMovies.forEach(movieId => {
      this.dataService.getDetailsById(movieId).subscribe((data: any) => {
        this.movieDetails.push(data);
      });
    });
  }
  
}