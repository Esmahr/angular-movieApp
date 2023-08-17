import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MovieApiService } from '../../service/movie-api.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service: MovieApiService) { }
  headerTitle : string = "Search";
  searchMovie: any;
  query: any;
  searchFilter(e: any) {
    this.query = e.target.value

    this.service
      .getSearch(this.query)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.searchMovie = data.results;
      })
  }
  ngOnInit(): void {
  }

}



