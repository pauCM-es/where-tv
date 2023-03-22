import { Observable } from "rxjs";
import { MovieModel } from "../models/movie.model";

export abstract class MovieRepository {
  abstract getAllMovies(): Observable<MovieModel[]>;
}