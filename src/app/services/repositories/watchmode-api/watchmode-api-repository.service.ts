import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRepository } from 'src/app/application/movie/repositories/movie.repository';
import { MovieModel } from 'src/app/application/movie/models/movie.model';
import { MovieSearchRepositoryMapper } from './movie-searched/search-results.mapper';
import { SearchResultsEntity } from './movie-searched/search-results-entity';
import { MovieSearchEntity } from './movie-searched/search-results-entity';
import { MovieDetailsModel } from 'src/app/application/movie/models/movie-details.model';
import { environment } from '../../../../environments/environment'
import { TitleDetailsEntity } from './movie-details/title-details-entity';
import { MovieDetailsRepositoryMapper } from './movie-details/title-details.mapper';

@Injectable({
  providedIn: 'root'
})
export class WatchmodeApiRepositoryService extends MovieRepository{
  url = 'https://api.watchmode.com/v1'
  API_KEY = environment.watchmodeApiKey
  searchMapper = new MovieSearchRepositoryMapper();
  detailsMapper = new MovieDetailsRepositoryMapper();
  
  constructor(private http: HttpClient) { 
    super();
  }

  getData(searchValue: string): Observable<MovieSearchEntity[]> {
    return this.http.get<SearchResultsEntity>(`${this.url}/autocomplete-search/?apiKey=${this.API_KEY}&search_value=${searchValue}&search_type=2`).pipe(map(data => {
      return data.results
    }))
  }
  

  getAllMovies(): Observable<MovieModel[]> {
    return this.getData("marvel")
    .pipe(map(list => this.searchMapper.mapFromList(list)))
  }

  getSearchMovie(value: string): Observable<MovieModel[]> {
    return this.getData(value)
    .pipe(map(list => this.searchMapper.mapFromList(list)))
  }

  getMovieDetails(titleId: number): Observable<MovieDetailsModel> {
    return this.http
    .get<TitleDetailsEntity>(`${this.url}/title/${titleId}/details/?apiKey=${this.API_KEY}&append_to_response=sources`)
    .pipe(map( title => this.detailsMapper.mapFrom(title)))
  }


  getSources(): Observable<any>{
    return this.http.get('https://api.watchmode.com/v1/sources/?apiKey=lyucHbsFJHIDgnHuvMKV6mwKeWLC50Y1b0QnU7uG')
  }

}