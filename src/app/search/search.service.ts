import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getSearch(query: string): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=f86778ad848bc5db81f8a27d73a1532b&query=' + query)
  }
}
