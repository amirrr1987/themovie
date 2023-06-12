import { z } from "zod";

export const countrySchema = z.object({
  iso_3166_1: z.string(),
  english_name: z.string(),
  native_name: z.string(),
});

export const imagesSchema = z.object({
  base_url: z.string(),
  secure_base_url: z.string(),
  backdrop_sizes: z.array(z.string()),
  logo_sizes: z.array(z.string()),
  poster_sizes: z.array(z.string()),
  profile_sizes: z.array(z.string()),
  still_sizes: z.array(z.string()),
});

export const jobSchema = z.object({
  department: z.string(),
  jobs: z.array(z.string()),
});

export const languageSchema = z.object({
  iso_639_1: z.string(),
  english_name: z.string(),
  name: z.string(),
});

export const timezoneSchema = z.object({
  iso_3166_1: z.string(),
  zones: z.array(z.string()),
});

export const configurationSchema = z.object({
  images: imagesSchema,
  change_keys: z.array(z.string()),
  countries: z.array(countrySchema),
  jobs: z.array(jobSchema),
  languages: z.array(languageSchema),
  primary_translations: z.array(z.string()),
  timezones: z.array(timezoneSchema),
});

export const stateSchema = z.object({
  configuration: configurationSchema,
});

export type State = z.infer<typeof stateSchema>;
