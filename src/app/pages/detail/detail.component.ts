import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from '../../service/movie-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  movieId: string = "";
  movie: any;
  reviews: any[] = [];
  cast: any[] = [];

  headerTitle: string = "Details"
  headerButtonImg: string = "../../../assets/Save.svg"

  tabs: string[] = ["About Movie", "Reviews", "Cast"]
  currentTab: string = "About Movie";

  savedMovies: any[] = [];

  constructor(private dataService: MovieApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.movieId = params["id"]);
    this.savedMovies = JSON.parse(localStorage.getItem("movies") || "[]");

    if (this.savedMovies.includes(this.movieId)) { this.headerButtonImg = "../../../assets/images/Save.svg" };

    this.getDetails(this.movieId);
    this.getReview(this.movieId);
    this.getCast(this.movieId);
  }

  getDetails(id: string) {
    this.dataService.getDetailsById(id).subscribe((data: any) => { this.movie = data; console.log(data); })
  }

  getReview(id: string) {
    this.dataService.getReviewsById(id).subscribe((data: { results: any[]; }) => { console.log(data); this.reviews = data.results });
  }

  getCast(id: string) {
    this.dataService.getCastById(id).subscribe((data: { cast: any[]; }) => { console.log(data); this.cast = data.cast });
  }

  isTabActive(tab: string): boolean {
    return this.currentTab === tab;
  }

  setTab(tab: string) {
    this.currentTab = tab;
  }

  MovieLocalStorage(): void {
    if (this.savedMovies.includes(this.movieId)) {
      this.savedMovies = this.savedMovies.filter(movieId => movieId !== this.movieId);
      this.headerButtonImg = "../../../assets/Save.svg"
    } else {
      this.savedMovies.push(this.movieId);
      this.headerButtonImg = "../../../assets/Vector.svg"

    }
    localStorage.setItem('movies', JSON.stringify(this.savedMovies));
  }
}