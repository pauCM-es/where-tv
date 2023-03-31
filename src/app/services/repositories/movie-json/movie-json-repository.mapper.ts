import { Mapper } from "src/app/application/base/mapper";
import { MovieModel } from "src/app/application/movie/models/movie.model";
import { MovieEntity } from "./movie-json-entity";


export class MovieRepositoryMapper extends Mapper <MovieEntity, MovieModel> {
  mapFrom(param: MovieEntity): MovieModel {
    return {
      title: param.title,
      description: param.description,
      poster: param.images.posterArt.url,
      releaseYear: param.releaseYear
    }
  }

  mapTo(param: MovieModel): MovieEntity {
    return {
      title: param.title,
      description: param.description,
      images: {posterArt: {
        url: param.poster
      }},
      releaseYear: param.releaseYear
    }
  }

  mapFromList(param: MovieEntity[]): MovieModel[] {
    let list: MovieModel[]
    list = []
    param.forEach(movie => {
      list.push({
        title: movie.title,
        description: movie.description,
        poster: movie.images.posterArt.url,
        releaseYear: movie.releaseYear
      })
    })
    return list
  }

  mapToList(param: MovieModel[]): MovieEntity[] {
    let list: MovieEntity[]
    list = []
    param.forEach(movie => {
      list.push({
      title: movie.title,
      description: movie.description,
      images: {posterArt: {
        url: movie.poster
      }},
      releaseYear: movie.releaseYear
      })
    })
    return list
  }
}