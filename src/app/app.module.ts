import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { FormsModule } from '@angular/forms';
import { Quete3Component } from './quete3/quete3.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { Quete4Component } from './quete4/quete4.component';
import { DisplayMoviesDirective } from './display-movies.directive';
import { ColorTextDirective } from './color-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    Quete3Component,
    HighlightDirective,
    DisplayGuestsDirective,
    Quete4Component,
    DisplayMoviesDirective,
    ColorTextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
