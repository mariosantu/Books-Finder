import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchGenreService {

  constructor(private _httpclient: HttpClient) { }

  // build the url to get books filtered
  // by the user's query
  getGenreUrl(genre:string): Observable<any> {
    
    let url = `https://openlibrary.org/subjects/${genre}.json`;

    return this._httpclient.get(url);
  }
}
