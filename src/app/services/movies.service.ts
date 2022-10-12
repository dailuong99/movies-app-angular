import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieCredit, MovieDto, MovieImages, Movies, MovieVideoDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { type } from 'os';
import { GenreDto } from '../models/genre';

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
        return of(res.results.slice(0, count))
      }));
  }

  getMovie(id: string) {
    return this.http.get<Movies>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  getMovieVideos(id: string) {
    return this.http.get<MovieVideoDto>(
      `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.results)
      }));
  }

  getMovieGenres() {
    return this.http.get<GenreDto>(
      `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(switchMap(res => {
        return of(res.genres)
      }));
  }

 getMoviesByGenre(genreId: string, pageNumber: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }

  getMovieCredit(id: string) {
    return this.http.get<MovieCredit>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 12));
        })
      );
  }

  searchMovies(page: number) {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(switchMap(res => {
        return of(res.results)
      }));
  }
}
