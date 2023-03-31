import { Observable } from "rxjs";
import { MovieDetailsModel } from "../models/movie-details.model";
import { MovieModel } from "../models/movie.model";

export abstract class MovieRepository {
  abstract getAllMovies(): Observable<MovieModel[]>;

  abstract getSearchMovie(value: string): Observable<MovieModel[]>;
  
  abstract getMovieDetails(id: string | number): Observable<MovieDetailsModel>;
}