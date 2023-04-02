import { Mapper } from 'src/app/application/base/mapper';
import { MovieDetailsModel, SourceMovieModel } from 'src/app/application/movie/models/movie-details.model';
import { SourceTitleEntity, TitleDetailsEntity } from './title-details-entity';

export class MovieDetailsRepositoryMapper extends Mapper<TitleDetailsEntity, MovieDetailsModel> {
  mapFrom(param: TitleDetailsEntity): MovieDetailsModel {

    // Remove duplicated sources
    let uniqueList: SourceTitleEntity[] = []
    param.sources.forEach( src => {
      !uniqueList.some(el=> el.source_id === src.source_id) && uniqueList.push(src)
    })
    

    return {
      id: param.id,
      title: param.title,
      description: param.plot_overview,
      poster: param.poster,
      releaseYear: param.year,
      imdb_id: param.imdb_id,
      type: param.type,
      runtime_minutes: param.runtime_minutes,
      genre_names: param.genre_names,
      us_rating: param.us_rating,
      user_rating: param.user_rating,
      critic_score: param.critic_score,
      network_names: param.network_names,
      trailer: param.trailer.replace('watch?v=', 'embed/'),
      trailer_thumbnail: param.trailer_thumbnail,
      sources: [ 
        ...uniqueList
        .map(src => {
        return {
          source_id: src.source_id,
          name: src.name,
          web_url: src.web_url,
          seasons: src.seasons,
          episodes: src.episodes,
          }
        })]
    }}
  

  // mapTo(param: MovieDetailsModel): TitleDetailsEntity {}

  mapFromList(param: TitleDetailsEntity[]): MovieDetailsModel[] {
    let list: MovieDetailsModel[];
    list = [];
    param.forEach((movie) => {
      list.push(this.mapFrom(movie));
    });
    return list;
  }

}
