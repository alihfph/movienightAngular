import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Movie, movies } from '../model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private ROOT_URL = 'http://localhost:3000/movies'

  constructor(private http: HttpClient) { }
getMoviesFromHttp
  () {
    return this.http.get<Movie[]>(this.ROOT_URL);
  }

  movieFromHttp(id: number): any {
    return this.http.get<Movie>(`${this.ROOT_URL}/${id}`);
  }
  addMovie(movie: Movie) {
   return this.http.post(this.ROOT_URL, movie)
  }
  
  }
  


