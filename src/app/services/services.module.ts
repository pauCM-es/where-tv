import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRepository } from '../application/movie/repositories/movie.repository';
import { HttpClientModule } from '@angular/common/http';
import { GetAllMoviesUseCase } from '../application/movie/usecases/movie-get-all.usecase';
import { GetSearchMovieUseCase } from '../application/movie/usecases/movie-get-search.usecase';
import { GetMovieDetailsUseCase } from '../application/movie/usecases/movie-get-details.usecase';
import { WatchmodeApiRepositoryService } from './repositories/watchmode-api/watchmode-api-repository.service';

const getAllMoviesUseCaseFactory = 
  (movieRepo: MovieRepository) => new GetAllMoviesUseCase(movieRepo);
const getSearchMovieUseCaseFactory = 
  (movieRepo: MovieRepository) => new GetSearchMovieUseCase(movieRepo);
const getMovieDetailsUseCaseFactory = 
  (movieRepo: MovieRepository) => new GetMovieDetailsUseCase(movieRepo);

  export const getAllMoviesUseCaseProvider = {
    provide: GetAllMoviesUseCase,
    useFactory: getAllMoviesUseCaseFactory,
    deps: [MovieRepository]
  }
  export const getSearchMovieUseCaseProvider = {
    provide: GetSearchMovieUseCase,
    useFactory: getSearchMovieUseCaseFactory,
    deps: [MovieRepository]
  }
  export const getMovieDetailsUseCaseProvider = {
    provide: GetMovieDetailsUseCase,
    useFactory: getMovieDetailsUseCaseFactory,
    deps: [MovieRepository]
  }
  
  

@NgModule({
  providers: [
    getAllMoviesUseCaseProvider,
    getSearchMovieUseCaseProvider,
    getMovieDetailsUseCaseProvider,
    {
      provide: MovieRepository,
      useClass: WatchmodeApiRepositoryService
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServicesModule {
}
