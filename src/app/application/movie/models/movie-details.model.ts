export interface SourceMovieModel {
  source_id: number;
  name: string;
  web_url: string;
  seasons: number | null;
  episodes: number | null;
}

export interface MovieDetailsModel {
  id: number;
  title: string;
  description: string;
  poster: string;
  releaseYear: number;
  imdb_id: string;
  type: string;
  runtime_minutes: number;
  genre_names: string[];
  us_rating: string;
  user_rating: number;
  critic_score: number;
  network_names: string[];
  trailer: string;
  trailer_thumbnail: string;
  sources:
    SourceMovieModel[];
}
