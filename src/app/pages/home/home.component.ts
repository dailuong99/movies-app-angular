import { Component, OnInit } from '@angular/core';
import { Movies } from '../../models/movie'
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movies[] = [];
  upcommingMovies: Movies[] = [];
  topRatedMovies: Movies[] = [];

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    })
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    })
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcommingMovies = movies;
    })
  }

}
