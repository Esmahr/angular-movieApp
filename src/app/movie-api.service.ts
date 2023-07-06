import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  moviesApiUrl = "https://api.themoviedb.org/3/movie/popular?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b";

  popularMovies(): Observable<any> {
    return this.http.get(this.moviesApiUrl)
  }

  mostApiUrl = "https://api.themoviedb.org/3/movie/now_playing?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b"

  mostMovies(): Observable<any> {
    return this.http.get(this.mostApiUrl)
  }

  genreApiUrl = "https://api.themoviedb.org/3/genre/movie/list?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b"

  genreMovies(): Observable<any> {
    return this.http.get(this.genreApiUrl)
  }

  upcomingApiUrl = "https://api.themoviedb.org/3/movie/upcoming?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b"

  upcomingMovies(): Observable<any> {
    return this.http.get(this.upcomingApiUrl)
  }

  comedyApiUrl = ""
  animationApiUrl = ""
  horrorApiUrl = ""
  actionApiUrl = ""

}
