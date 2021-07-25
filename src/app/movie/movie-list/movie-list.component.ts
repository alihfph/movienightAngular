import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../services/movie.service';
import {Movie} from "../model/movie.model"
import { NavbarService } from 'src/app/navbar/Services/navbar.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  
  movies$?: Observable<Movie[]>;
  constructor(private movieService: MovieService,
    private navabrService: NavbarService) { }

  ngOnInit(): void {
    this.movies$ = this.movieService.getMoviesFromHttp()
    console.log(this.movies$)
    this.navabrService.title.next("Movie Night")
  }

}
