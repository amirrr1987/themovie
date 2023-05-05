import { z } from "zod";

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const stateSchema = z.object({
  genres: z.array(genreSchema),
});

export type State = z.infer<typeof stateSchema>;
