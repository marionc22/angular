import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  hidden: boolean = true

  public hide(){
   this.hidden= !this.hidden
  }

  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
