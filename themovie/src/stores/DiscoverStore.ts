import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { GetDiscoverMovieApi } from '@/services/DiscoverApi'
import type { Discover } from '@/models'
import { cloneDeep } from "lodash";

export const useDiscoverStore = defineStore('Discover', () => {

  const obj = {
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
      }
    ],
    "total_pages": 0,
    "total_results": 0
  }
  const state = reactive<Discover>(obj)
  const cloneState = cloneDeep<Discover>(obj)

  const ResetState = () => {
    Object.assign(state, cloneState)
  }

  const GetDiscoverMovieHandler = async (type: boolean, page: number) => {
    try {
      const { data } = await GetDiscoverMovieApi(type ? 'movie' : 'tv', `&page=${page}&language=en-US&region=S&sort_by=popularity.desc&certification_country=S&certification=S&certification.lte=V&certification.gte=V&include_adult=false&include_video=false&page=1&primary_release_year=N&primary_release_date.gte=V&primary_release_date.lte=V&release_date.gte=V&release_date.lte=V&with_release_type=I&year=I&vote_count.gte=I&vote_count.lte=V&vote_average.gte=V&vote_average.lte=V&with_cast=S&with_crew=S&with_people=S&with_companies=S&with_genres=S&without_genres=S&with_keywords=S&without_keywords=S&with_runtime.gte=V&with_runtime.lte=V&with_original_language=S&with_watch_providers=S&watch_region=S&with_watch_monetization_types=flatrate&without_companies=S`)
      Object.assign(state, data)
    } catch (error) {

    }
  }

  return { state, ResetState, GetDiscoverMovieHandler }
})
