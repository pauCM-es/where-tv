import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/application/movie/models/movie.model';
import { GetAllMoviesUseCase } from 'src/app/application/movie/usecases/movie-get-all.usecase';
import { MovieInterface } from '../../interfaces/movie-interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  movieList!: MovieModel[];
  searchResult: MovieModel[] = []

  currentPage: number = 1;
  itemsPerPage: number = 10;
  amountPages!: number;
  
  constructor( private getAllMovies: GetAllMoviesUseCase) { }

  ngOnInit(): void {
    this.fetchMovies();

    
  }
  createPaginator(list: MovieModel[]){
    let totalItems = list.length;
    this.amountPages = Math.ceil(totalItems / this.itemsPerPage) 
  }

  fetchMovies(){
    this.getAllMovies.execute().subscribe( res => {
      console.log(res);
      this.movieList = res.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0
      });
      this.searchResult = [...this.movieList]
      this.createPaginator(this.movieList) 
    })
  }

  public onGoTo(page: number) {
    this.currentPage = page
  }

  public  onSearch(title: string) {
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
