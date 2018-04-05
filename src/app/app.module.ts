import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here
import { HeroService } from './hero.service';
import { GodService } from './god.service';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { GodsComponent } from './gods/gods.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { GodDetailComponent } from './god-detail/god-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    GodsComponent,
    HeroDetailComponent,
    GodDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService, GodService, MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
