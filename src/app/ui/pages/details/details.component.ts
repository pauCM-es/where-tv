import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsModel } from 'src/app/application/movie/models/movie-details.model';
import { GetMovieDetailsUseCase } from 'src/app/application/movie/usecases/movie-get-details.usecase';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  safeURL!: SafeResourceUrl;
  movieDetails: MovieDetailsModel=
  {
    id: 1195869,
    title: 'Jurassic World Dominion',
    description:
      'Four years after the destruction of Isla Nublar, Biosyn operatives attempt to track down Maisie Lockwood, while Dr Ellie Sattler investigates a genetically engineered swarm of giant insects.',
    poster: 'https://cdn.watchmode.com/posters/01195869_poster_w185.jpg',
    releaseYear: 2022,
    imdb_id: 'tt8041270',
    type: 'movie',
    runtime_minutes: 147,
    genre_names: ['Action', 'Adventure', 'Science Fiction'],
    us_rating: 'PG-13',
    user_rating: 6.6,
    critic_score: 34,
    network_names: [],
    trailer: 'https://www.youtube.com/embed/qVUNFBm1hYs',
    trailer_thumbnail:
      'https://cdn.watchmode.com/video_thumbnails/764701_pthumbnail_320.jpg',
    sources: [
      {
        source_id: 349,
        name: 'iTunes',
        web_url:
          'https://tv.apple.com/us/movie/umc.cmc.4bjj3kj10p3h3pih1hi308rdc?itsct=&itscg=30200&at=1010layx',
        seasons: null,
        episodes: null,
      },
      {
        source_id: 349,
        name: 'iTunes',
        web_url:
          'https://tv.apple.com/us/movie/umc.cmc.4bjj3kj10p3h3pih1hi308rdc?itsct=&itscg=30200&at=1010layx',
        seasons: null,
        episodes: null,
      },
      {
        source_id: 349,
        name: 'iTunes',
        web_url:
          'https://tv.apple.com/us/movie/umc.cmc.4bjj3kj10p3h3pih1hi308rdc?itsct=&itscg=30200&at=1010layx',
        seasons: null,
        episodes: null,
      },
      {
        source_id: 140,
        name: 'Google Play',
        web_url:
          'https://play.google.com/store/movies/details/Jurassic_World_Dominion_Extended_Cut?gl=US&hl=en&id=ZcFEkizjkE8.P',
        seasons: null,
        episodes: null,
      },
      {
        source_id: 307,
        name: 'VUDU',
        web_url: 'https://www.vudu.com/content/movies/details/content/2029022',
        seasons: null,
        episodes: null,
      },
      {
        source_id: 307,
        name: 'VUDU',
        web_url: 'https://www.vudu.com/content/movies/details/content/2029022',
        seasons: null,
        episodes: null,
      },
    ],
  };

  constructor(
    private route: ActivatedRoute,
    private getDetails: GetMovieDetailsUseCase,
    private _sanitizer: DomSanitizer
  ) {
  }
  
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const titleId = Number(routeParams.get('titleId'));
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.movieDetails.trailer)
    // this.getDetails.execute(titleId).subscribe(data => {
    //     this.movieDetails = { ...data }
    //     console.log(this.movieDetails);
    //     this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.movieDetails.trailer)
    // })
  }
}
