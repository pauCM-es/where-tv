export interface MovieEntity {
  title: string;
  description: string;
  images: {
    posterArt: {
      url: string;
      width?: number;
      height?: number;
    }
  }
  releaseYear: number;
}