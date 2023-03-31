
export interface MovieSearchEntity {
  name: string;
  relevance?: number;
  type?: string;
  id: number;
  year: number;
  result_type?: string;
  tmdb_id?: number;
  tmdb_type?: string;
  image_url: string;
}

export interface SearchResultsEntity {
  results: MovieSearchEntity[]
}
