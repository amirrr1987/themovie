import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { MovieDetail } from '@/models'
import { GetMovieDetailApi } from '@/services/MoviesApi'
import { cloneDeep } from 'lodash'

export const useMoviesStore = defineStore('Movie', () => {
    const obj = {
        "adult": false,
        "backdrop_path": null,
        "belongs_to_collection": null,
        "budget": 0,
        "genres": [
            {
                "id": 0,
                "name": ""
            }
        ],
        "homepage": "",
        "id": 0,
        "imdb_id": "",
        "original_language": "",
        "original_title": "",
        "overview": "",
        "popularity": 0,
        "poster_path": null,
        "production_companies": [],
        "production_countries": [],
        "release_date": "",
        "revenue": 0,
        "runtime": 0,
        "spoken_languages": [],
        "status": "",
        "tagline": "",
        "title": "",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    }
    const state = reactive<MovieDetail>(obj)
    const cloneState = cloneDeep<MovieDetail>(obj)
    const ResetState = () => {
        Object.assign(state, cloneState)
    }

    const GetMovieDetailHandler = async (movieId: string) => {
        try {
            const { data } = await GetMovieDetailApi(movieId)
            Object.assign(state, data)
        } catch (error) {

        }
    }

    return { state, ResetState, GetMovieDetailHandler }
})
