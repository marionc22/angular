import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quete4',
  templateUrl: './quete4.component.html',
  styleUrls: ['./quete4.component.css']
})
export class Quete4Component implements OnInit {

  isMovieListDisplayed = true
  movieList: string[] = ["Precious", "American Beauty", "Harry Potter 3", "Le Diner de Con"];

  constructor() { }

  ngOnInit(): void {
  }

}
