import { z } from 'zod'

export const querySchema = z.object({
  label: z.string(),
  value: z.any()
})

export const stateSchema = z.object({
  query: z.array(querySchema)
})
export type State = z.infer<typeof stateSchema>
