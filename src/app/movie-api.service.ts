import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  moviesApiUrl = "https://api.themoviedb.org/3/movie/popular?api_key=2937a1755f75e11815ec137a11f8c4b3"
  topMovies(): Observable<any> {
    return this.http.get(this.moviesApiUrl)
  }
}
