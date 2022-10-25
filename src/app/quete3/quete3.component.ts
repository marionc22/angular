import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quete3',
  templateUrl: './quete3.component.html',
  styleUrls: ['./quete3.component.css']
})
export class Quete3Component implements OnInit {

  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = true;
  isGuestListDisplayed = true
  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];


  constructor() { }

  ngOnInit(): void {
  }

}
