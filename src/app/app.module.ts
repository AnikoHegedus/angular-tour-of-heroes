import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { GodsComponent } from './gods/gods.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { GodDetailComponent } from './god-detail/god-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    GodsComponent,
    HeroDetailComponent,
    GodDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
