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

  tabs: string[] = ["About Movie", "Reviews", "Cast"]
  currentTab: string = "About Movie";

  savedMovies: any[] = [];

  constructor(private dataService: MovieApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.movieId = params["id"]);
    this.getDetails(this.movieId);
    this.getReview(this.movieId);
  }

  getDetails(id: string) {
    this.dataService.getDetailsById(id).subscribe((data: any) => { this.movie = data; console.log(data); })
  }

  getReview(id: string) {
    this.dataService.getReviewById(id).subscribe((data: { results: any[]; }) => { console.log(data); this.reviews = data.results });
  }


  isTabActive(tab: string): boolean {
    return this.currentTab === tab;
  }

  setTab(tab: string) {
    this.currentTab = tab;
  }

}