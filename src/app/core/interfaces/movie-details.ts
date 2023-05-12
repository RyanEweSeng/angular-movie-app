export interface MovieDetails {
  id: number,
  adult: boolean,
  genres: Array<any>,
  backdrop_path: string,
  title: string,
  overview: string,
  original_language: string,
  release_date: string,
  vote_average: number,
  homepage: string,
  runtime: number
}