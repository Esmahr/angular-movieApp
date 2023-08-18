import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  popularMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b`)
  }

  mostMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b`)
  }

  topMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b`)
  }

  upcomingMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b`)
  }

  genreMovies(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/genre/movie/list?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b`)
  }

  getDetailsById(movieId: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?language=tr&api_key=f86778ad848bc5db81f8a27d73a1532b`)
  }

  getReviewsById(movieId:string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=f86778ad848bc5db81f8a27d73a1532b`)
  }

  getCastById(movieId:string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=f86778ad848bc5db81f8a27d73a1532b`)
  }

  getSearch(query: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=f86778ad848bc5db81f8a27d73a1532b&query=' + query)
  }

}
