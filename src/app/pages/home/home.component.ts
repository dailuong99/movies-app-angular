import { Component, OnInit } from '@angular/core';
import { mapMovieToItem, Movies } from '../../models/movie'
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowsService } from 'src/app/services/tvshows.service';
import { Item } from 'src/app/components/item/item';
import { mapTvShowToItem } from 'src/app/models/tv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Item[] = [];
  upcommingMovies: Item[] = [];
  topRatedMovies: Item[] = [];
  popularTvShows: Item[] = [];

  constructor(private moviesService: MoviesService, private tvShowsService: TvShowsService) { }

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies.map((movie)=>mapMovieToItem(movie));
    })
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies.map((movie)=>mapMovieToItem(movie));
    })
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcommingMovies = movies.map((movie)=>mapMovieToItem(movie));
    })
    this.tvShowsService.getTvs('popular').subscribe((tvShows) => {
      this.popularTvShows = tvShows.map((tvshow) => mapTvShowToItem(tvshow));
    });
  }

}
