import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CountryResponse } from '../models/countryResponse.model';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private url = environment.baseUrl + "country";

  constructor(private http: HttpClient) { }

  searchCountryDetails(term: string): Observable<CountryResponse> {
    if (!term.trim()) {
      // if not search term, return empty.
      return of();
    }
    return this.http.get<CountryResponse>(`${this.url}/${term}`).pipe(
      tap(_ => console.log(`found Country matching "${term}"`)),
      catchError(this.handleError<CountryResponse>('searchCountry', null))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
