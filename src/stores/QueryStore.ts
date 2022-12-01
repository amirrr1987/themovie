import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from "lodash";

export const useQueryStore = defineStore('Query', () => {
    const obj = {
        queries: {
            // category: '',
            // without_companies: '',
            // withWatch_monetization_types: '',
            // watch_region: '',
            // with_watch_providers: '',
            // with_original_language: '',
            // with_runtime: {
            //     lte: '',
            //     gte: ''
            // },
            // without_keywords: '',
            // with_keywords: '',
            // without_genres: '',
            // with_genres: '',
            // with_companies: '',
            // with_people: '',
            // with_crew: '',
            // with_cast: '',
            // vote_average: {
            //     lte: '',
            //     gte: ''
            // },
            // vote_count: {
            //     lte: '',
            //     gte: ''
            // },
            // year: 0,
            // language: "",
            // region: "",
            // sort_by: "",
            // certification_country: "",
            // certification: {
            //     DEFAULT: "",
            //     lte: '',
            //     gte: ''
            // },
            // include_adult: null,
            // include_video: null,
            // page: 1,
            // primary_release_year: 0,
            // primary_release_date: {
            //     lte: '',
            //     gte: ''
            // },
            // release_date: {
            //     lte: '',
            //     gte: ''
            // },
            // with_release_type: 1,
        },
        queryString: ''
    }
    const state = reactive<any>(obj)
    const cloneState = cloneDeep<any>(obj)
    const resetState = () => {
        Object.assign(state, cloneState)
    }
    const createQueryString = () => {
        state.queryString = Object.keys(state.queries).map(key => key + '=' + state.queries[key]).join('&');

    }
    return { state, resetState, createQueryString }
})
