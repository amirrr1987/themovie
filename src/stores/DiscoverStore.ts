import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getDiscoverApi } from '@/services/DiscoverApi'
import { cloneDeep } from "lodash";
export interface State {
  discover: Discover;
}
export interface Discover {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
export interface Result {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export const useDiscoverStore = defineStore('Discover', () => {
  const obj = {
    "discover": {
      "page": 1,
      "results": [
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        },
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        },
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        },
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        },
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        },
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        },
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        },
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        },
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        },
        {
          "adult": false,
          "backdrop_path": "",
          "genre_ids": [],
          "id": 0,
          "original_language": "",
          "original_title": "",
          "overview": "",
          "popularity": 0,
          "poster_path": "",
          "release_date": "",
          "title": "",
          "video": false,
          "vote_average": 0,
          "vote_count": 0
        }
      ],
      "total_pages": 0,
      "total_results": 0
    }
  }
  const state = reactive<State>(obj)
  const cloneState = cloneDeep<State>(obj)
  const resetState = () => {
    Object.assign(state, cloneState)
  }
  const getDiscoverHandler = async (type: string, query: string) => {
    try {
      const { data } = await getDiscoverApi(type, query)
      Object.assign(state.discover, data)
    } catch (error) {
    }
  }

  const computedDiscover = computed(() => {
    return state.discover
  })
  return { state, resetState, getDiscoverHandler, computedDiscover }
})
