import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];
  tvShowGenres: Genre[] = [];

  constructor(private moviesService: MoviesService, private tvShowsService: TvShowsService) { }

  ngOnInit(): void {
    this.moviesService.getMovieGenres().subscribe(genresData => {
      this.genres = genresData;
    })

    this.tvShowsService.getTvShowsGenres().subscribe((genresData) => {
      this.tvShowGenres = genresData;
    });
  }

}
