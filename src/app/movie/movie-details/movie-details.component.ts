import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/Services/navbar.service';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  id : number | any;
  movie : Movie | any;
  movieSub$ : Subscription | any;

  constructor(private movieService : MovieService,
     private route: ActivatedRoute,
     private navbarService: NavbarService) { }

  ngOnInit() {
  this.id = Number(this.route.snapshot.paramMap.get('id'))
  this.movieSub$ = this.movieService
    .movieFromHttp(this.id)
    .subscribe((movie: { name: any; }) => {
      this.movie = movie;
      this.navbarService.title.next(movie.name);
    });
}
  ngOnDestroy(): void {
  this.movieSub$.unsubscribe()
  }
}
