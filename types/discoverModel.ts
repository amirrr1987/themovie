export interface Discover {
  page: number;
  results: DiscoverItem[];
  total_pages: number;
  total_results: number;
}

export interface DiscoverItem {
  adult: boolean;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  backdrop_path: null | string;
  origin_country: string[];
  original_name: string;
  first_air_date: Date;
  name: string;
}
