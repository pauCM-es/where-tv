import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/application/movie/models/movie.model';
import { GetAllMoviesUseCase } from 'src/app/application/movie/usecases/movie-get-all.usecase';
import { GetSearchMovieUseCase } from 'src/app/application/movie/usecases/movie-get-search.usecase';
import { MovieInterface } from '../../interfaces/movie-interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  movieList!: MovieModel[];
  searchResult: MovieModel[] = []
  searchValue: string = ""

  currentPage: number = 1;
  itemsPerPage: number = 10;
  amountPages!: number;
  
  constructor( private searchMovies: GetSearchMovieUseCase) { }

  ngOnInit(): void {
  }

  createPaginator(list: MovieModel[]){
    let totalItems = list.length;
    this.amountPages = Math.ceil(totalItems / this.itemsPerPage) 
  }

  searchMovie(value: string){
    if (value.length > 2) { 
      this.searchMovies.execute(value).subscribe( res => {
        console.log(res);
        res.length > 50 
          ? this.movieList = res.slice(0, 50)
          : this.movieList = res
        this.searchResult = [...this.movieList]
        this.createPaginator(this.movieList) 
      })
      this.searchValue = ""
    }
  }

  public onGoTo(page: number) {
    this.currentPage = page
  }

  public  onSearch(title: string) {
    this.searchValue = title
    this.searchResult = []
    this.currentPage = 1
    this.movieList.forEach(movie => {
      movie.title.toLowerCase().includes(title.toLowerCase()) && this.searchResult.push(movie)
    })
    console.log(this.searchResult);
    this.createPaginator(this.searchResult)
    return this.searchResult
  }

}
