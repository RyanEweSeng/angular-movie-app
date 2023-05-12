import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'f17868bf6f3a716de2511915793ad50c';
  private apiUrl = 'https://api.themoviedb.org/3';
  private endpoint = '/discover/movie';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.endpoint}?api_key=${this.apiKey}`);
  }
}
