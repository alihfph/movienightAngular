import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  title: BehaviorSubject<string> | any

  constructor() {
    this.title = new BehaviorSubject('MovieNight')
   }
}
