import { Mapper } from 'src/app/application/base/mapper';
import { MovieModel } from 'src/app/application/movie/models/movie.model';
import { MovieSearchEntity } from './search-results-entity';

export class MovieSearchRepositoryMapper extends Mapper<
  MovieSearchEntity,
  MovieModel
> {
  mapFrom(param: MovieSearchEntity): MovieModel {
    return {
      id: param.id,
      title: param.name,
      poster: param.image_url,
      releaseYear: param.year,
      description: '',
    };
  }

  mapTo(param: MovieModel): MovieSearchEntity {
    return {
      id: Number(param.id),
      name: param.title,
      year: param.releaseYear,
      image_url: param.poster,
    };
  }

  mapFromList(param: MovieSearchEntity[]): MovieModel[] {
    let list: MovieModel[];
    list = [];
    param.forEach((movie) => {
      list.push({
        id: movie.id,
        title: movie.name,
        poster: movie.image_url,
        releaseYear: movie.year,
        description: '',
      });
    });
    return list;
  }

  mapToList(param: MovieModel[]): MovieSearchEntity[] {
    let list: MovieSearchEntity[];
    list = [];
    param.forEach((movie) => {
      list.push({
        id: Number(movie.id),
        name: movie.title,
        year: movie.releaseYear,
        image_url: movie.poster,
      });
    });
    return list;
  }
}
