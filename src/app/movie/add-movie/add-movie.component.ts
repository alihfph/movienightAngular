import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/navbar/Services/navbar.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
 movieForm = new FormGroup({
   name: new FormControl("", [Validators.required]),
   image: new FormControl("", [Validators.required]),
   genre: new FormControl("", [Validators.required]),
   releaseYear: new FormControl("", [Validators.required])
  })
  constructor(private navbar: NavbarService,
    private movieservice: MovieService,
    private router: Router ) { }

  ngOnInit(): void {
    this.navbar.title.next("Add Movies")
  }
  addMovie() {
    if(this.movieForm.valid)
   this.movieservice.addMovie(this.movieForm.value).subscribe(res=>{
     this.movieForm.reset(),
     this.router.navigate(['/'])
   })
  }

}
