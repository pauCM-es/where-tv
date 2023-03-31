import { Observable } from "rxjs";
import { UseCase } from "../../base/use-case";
import { MovieDetailsModel } from "../models/movie-details.model";
import { MovieRepository } from "../repositories/movie.repository";


export class GetMovieDetailsUseCase implements UseCase< {}, MovieDetailsModel> {

  constructor(private movieRepositoy: MovieRepository) { }

  execute(id: string | number): Observable<MovieDetailsModel> {
    return this.movieRepositoy.getMovieDetails(id);
  }
}