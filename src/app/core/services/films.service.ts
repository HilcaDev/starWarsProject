import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFilms } from '../constants/films.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<HttpResponse<any>>{
    return this.http.get<any>(`${environment.baseUrl}/films/`, {observe:'response'})
  }

  getUserById(id: number): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${environment.baseUrl}/films/${id}`, { observe: 'response' });
  }
}
