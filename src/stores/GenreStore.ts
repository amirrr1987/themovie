import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { GenresModel } from '@/models'
import { GetGenreMovieApi } from '@/services/GenreApi'

export const useGenreStore = defineStore('Genre', () => {
  const state = reactive<GenresModel>({
    "genres": [
      {
        "id": 0,
        "name": ""
      }
    ]
  })

  const GetGenreMovieHandler = async () => {
    try {
      const { data } = await GetGenreMovieApi('&language=en-US')
      Object.assign(state, data)
    } catch (error) {

    }
  }
  const findGenreNameById = (id: number) => {
    const index = state.genres.findIndex((single) => {
      return single.id === id
    })
    return state.genres[index]?.name ?? ''
  }

  return { state, GetGenreMovieHandler, findGenreNameById }
})
