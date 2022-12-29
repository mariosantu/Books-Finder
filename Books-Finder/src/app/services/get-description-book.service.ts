import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDescriptionBookService {

  constructor(private _httpclient: HttpClient) { }

  getDescriptionUrl(key:string): Observable<any> {
    
    let url = `https://openlibrary.org${key}.json`;

    return this._httpclient.get(url);
  }
}
