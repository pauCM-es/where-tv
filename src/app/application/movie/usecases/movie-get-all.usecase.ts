import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { MovieModel } from "../models/movie.model";
import { MovieRepository } from "../repositories/movie.repository";


export class GetAllMoviesUseCase implements UseCase< {}, MovieModel[]> {

  constructor(private movieRepositoy: MovieRepository) { }

  execute(): Observable<MovieModel[]> {
    return this.movieRepositoy.getAllMovies();
  }
}