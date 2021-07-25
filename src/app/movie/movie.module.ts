import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent, MovieComponent, AddMovieComponent],
  imports: [
    CommonModule, MovieRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class MovieModule { }
