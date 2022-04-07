import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacters } from '../constants/characters.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.baseUrl}/people`, { observe: 'response' })
  }

  getApi(): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.baseUrl}/people`, { observe: 'response' })
  }
}
