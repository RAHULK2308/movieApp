import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  searchItem:any
  option:any
  MovieList:any=[]

  constructor(public movieService:MoviesService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      data=>{
        this.MovieList=data;
        console.log(
          this.MovieList.results
        )
      }
    )
  }

}
