import { z } from "zod";
import { OriginalLanguage } from "/tmp/61743789d404f649eae4292926bc9e16.ts";

export const originalLanguageSchema = z.nativeEnum(OriginalLanguage);

export const tvResultSchema = z.object({
  backdrop_path: z.string().nullable(),
  first_air_date: z.date(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  name: z.string(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const movieResultSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: originalLanguageSchema,
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  release_date: z.date(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const tvSchema = z.object({
  page: z.number(),
  results: z.array(tvResultSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const movieSchema = z.object({
  page: z.number(),
  results: z.array(movieResultSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const stateSchema = z.object({
  discover: movieSchema,
});
export type State = z.infer<typeof stateSchema>;