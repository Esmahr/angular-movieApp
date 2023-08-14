import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { SearchService } from './search.service';
import { MovieApiService } from '../../service/movie-api.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit  {
  constructor(private myDataService: SearchService,private service:MovieApiService) { }
  searchMovie: any;
  query: any;
  searchFilter(e: any) {
    this.query = e.target.value

    this.myDataService
      .getSearch(this.query)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.searchMovie = data.results;
      })
  }
  ngOnInit(): void {
  }

}



