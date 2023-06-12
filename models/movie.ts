import { z } from "zod";

export const belongsToCollectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string(),
  backdrop_path: z.string(),
});

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const productionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

export const productionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});

export const spokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

export const movieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  belongs_to_collection: belongsToCollectionSchema,
  budget: z.number(),
  genres: z.array(genreSchema),
  homepage: z.string(),
  id: z.number(),
  imdb_id: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  production_companies: z.array(productionCompanySchema),
  production_countries: z.array(productionCountrySchema),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: z.array(spokenLanguageSchema),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const stateSchema = z.object({
  movie: movieSchema,
});
export type State = z.infer<typeof stateSchema>;
