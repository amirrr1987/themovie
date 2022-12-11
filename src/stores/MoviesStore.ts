import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
// import type { MovieDetail } from '@/models'
import { GetMovieDetailApi } from '@/services/MoviesApi'
import { cloneDeep } from 'lodash'
import { z } from 'zod'


export interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: null | string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}


export const useMoviesStore = defineStore('Movie', () => {
    const obj = {
        "adult": false,
        "backdrop_path": "",
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
        "poster_path": "",
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
            const mySchema = z.string();
            mySchema.parse(data);
        } catch (error) {

        }
    }

    return { state, ResetState, GetMovieDetailHandler }
})
