import { z } from "zod";

export const certificationSchema = z.object({
  DEFAULT: z.string(),
  lte: z.string(),
  gte: z.string(),
});

export const primaryReleaseDateSchema = z.object({
  lte: z.string(),
  gte: z.string(),
});

export const querySchema = z.object({
  language: z.string(),
  region: z.string(),
  sort_by: z.string(),
  certification_country: z.string(),
  certification: certificationSchema,
  include_adult: z.boolean(),
  include_video: z.boolean(),
  page: z.string(),
  primary_release_year: z.number(),
  primary_release_date: primaryReleaseDateSchema,
  release_date: primaryReleaseDateSchema,
  with_release_type: z.number(),
  year: z.number(),
  vote_count: primaryReleaseDateSchema,
  vote_average: primaryReleaseDateSchema,
  with_cast: z.string(),
  with_crew: z.string(),
  with_people: z.string(),
  with_companies: z.string(),
  with_genres: z.string(),
  without_genres: z.string(),
  with_keywords: z.string(),
  without_keywords: z.string(),
  with_runtime: primaryReleaseDateSchema,
  with_original_language: z.string(),
  with_watch_providers: z.string(),
  watch_region: z.string(),
  with_watch_monetization_types: z.boolean(),
  without_companies: z.string(),
});
export const stateSchema = z.object({
  query: querySchema,
});
export type State = z.infer<typeof stateSchema>;
