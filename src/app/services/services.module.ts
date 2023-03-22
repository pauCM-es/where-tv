import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRepository } from '../application/movie/repositories/movie.repository';
import { MovieJsonRepositoryService } from './repositories/movie-json/movie-json-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { GetAllMoviesUseCase } from '../application/movie/usecases/movie-get-all.usecase';

const getAllMoviesUseCaseFactory = 
  (movieRepo: MovieRepository) => new GetAllMoviesUseCase(movieRepo);

export const getAllMoviesUseCaseProvider = {
  provide: GetAllMoviesUseCase,
  useFactory: getAllMoviesUseCaseFactory,
  deps: [MovieRepository]
}



@NgModule({
  providers: [
    getAllMoviesUseCaseProvider,
    {
      provide: MovieRepository,
      useClass: MovieJsonRepositoryService
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServicesModule {
}
