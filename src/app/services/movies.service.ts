import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'bf252ae820dc463a9f04e361a064ff88';

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(switchMap(res => {
        return of(res.results)
      }));
  }
  searchMovies(page: number) {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(switchMap(res => {
        return of(res.results)
      }));
  }
}
