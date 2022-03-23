import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http:HttpClient) { }

  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=4354f6ae31f4b4ff46b7d97ba0343089&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=28&with_watch_monetization_types=flatrate')
  }
}
