import { Observable } from "rxjs";
import { MovieEntity } from "./movie-json-entity";

export interface DataJsonEntity {
  total: number;
  entries: MovieEntity[]
}