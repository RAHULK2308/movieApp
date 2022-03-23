import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FilterPipe } from './filter.pipe';

import { MoviesService } from './movies.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { Pipe, PipeTransform } from '@angular/core';
import { RatingPipe } from './rating.pipe'; 
@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    FilterPipe,
    RatingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    //material
    MatTableModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
