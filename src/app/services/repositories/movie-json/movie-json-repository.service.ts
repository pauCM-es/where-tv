import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRepository } from 'src/app/application/movie/repositories/movie.repository';
import { MovieRepositoryMapper } from './movie-json-repository.mapper';
import { MovieModel } from 'src/app/application/movie/models/movie.model';
import { MovieEntity } from './movie-json-entity';
import { DataJsonEntity } from './data-json-entity';

@Injectable({
  providedIn: 'root'
})
export class MovieJsonRepositoryService extends MovieRepository{
  url = 'https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json'
  mapper = new MovieRepositoryMapper();
  
  constructor(private http: HttpClient) { 
    super();
  }

  getData(): Observable<MovieEntity[]> {
    return this.http.get<DataJsonEntity>(this.url).pipe(map(data => {
      return data.entries
    }))
  }
  

  getAllMovies(): Observable<MovieModel[]> {
    return this.getData()
    .pipe(map(list => this.mapper.mapFromList(list)))
  }

}
