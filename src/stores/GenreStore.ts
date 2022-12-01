import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getGenreApi } from '@/services/GenreApi'
import { cloneDeep } from 'lodash';
export interface State {
  genres: Genre[];
}
export interface Genre {
  id: number;
  name: string;
}
export const useGenreStore = defineStore('Genre', () => {
  const obj = {
    "genres": [
      {
        "id": 0,
        "name": ""
      }
    ]
  }
  const state = reactive<State>(obj)
  const cloneState = cloneDeep<State>(obj)
  const resetState = () => {
    Object.assign(state, cloneState)
  }
  const getGenreHandler = async (type: string) => {
    try {
      const { data } = await getGenreApi(type)
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
  return { state, resetState, getGenreHandler, findGenreNameById }
})
