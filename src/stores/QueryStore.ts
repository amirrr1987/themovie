import { reactive } from 'vue'
import { defineStore } from 'pinia'
export const useQueryStore = defineStore('QueryStore', () => {
    const state = reactive(
        {
            queries: {
                api_key: 'f62f750b70a8ef11dad44670cfb6aa57',
                category: '',
                without_companies: '',
                withWatch_monetization_types: '',
                watch_region: '',
                with_watch_providers: '',
                with_original_language: '',
                with_runtime: {
                    lte: '',
                    gte: ''
                },
                without_keywords: '',
                with_keywords: '',
                without_genres: '',
                with_genres: '',
                with_companies: '',
                with_people: '',
                with_crew: '',
                with_cast: '',
                vote_average: {
                    lte: '',
                    gte: ''
                },
                vote_count: {
                    lte: '',
                    gte: ''
                },
                year: 0,
                language: "",
                region: "",
                sort_by: "",
                certification_country: "",
                certification: {
                    DEFAULT: "",
                    lte: '',
                    gte: ''
                },
                include_adult: null,
                include_video: null,
                page: 1,
                primary_release_year: 0,
                primary_release_date: {
                    lte: '',
                    gte: ''
                },
                release_date: {
                    lte: '',
                    gte: ''
                },
                with_release_type: 1,
            },
            queryString: ''
        }
    )
    const createQueryString = () => {
        state.queryString += `?api_key=${state.queries.api_key}`
        if (state.queries.category.length > 0) {
            state.queryString += `&category=${state.queries.category}`
        }
        if (state.queries.without_companies.length > 0) {
            state.queryString += `&without_companies=${state.queries.without_companies}`
        }
        if (state.queries.withWatch_monetization_types.length > 0) {
            state.queryString += `&withWatch_monetization_types=${state.queries.withWatch_monetization_types}`
        }
        if (state.queries.watch_region.length > 0) {
            state.queryString += `&watch_region=${state.queries.watch_region}`
        }
        if (state.queries.with_watch_providers.length > 0) {
            state.queryString += `&with_watch_providers=${state.queries.with_watch_providers}`
        }
        if (state.queries.with_original_language.length > 0) {
            state.queryString += `&with_original_language=${state.queries.with_original_language}`
        }
        if (state.queries.without_keywords.length > 0) {
            state.queryString += `&without_keywords=${state.queries.without_keywords}`
        }
        if (state.queries.with_keywords.length > 0) {
            state.queryString += `&with_keywords=${state.queries.with_keywords}`
        }
        if (state.queries.without_genres.length > 0) {
            state.queryString += `&without_genres=${state.queries.without_genres}`
        }
        if (state.queries.with_genres.length > 0) {
            state.queryString += `&with_genres=${state.queries.with_genres}`
        }
        if (state.queries.with_companies.length > 0) {
            state.queryString += `&with_companies=${state.queries.with_companies}`
        }
        if (state.queries.with_people.length > 0) {
            state.queryString += `&with_people=${state.queries.with_people}`
        }
        if (state.queries.with_crew.length > 0) {
            state.queryString += `&with_crew=${state.queries.with_crew}`
        }
        if (state.queries.with_cast.length > 0) {
            state.queryString += `&with_cast=${state.queries.with_cast}`
        }
        if (state.queries.year > 0) {
            state.queryString += `&year=${state.queries.year}`
        }
        if (state.queries.language.length > 0) {
            state.queryString += `&language=${state.queries.language}`
        }
        if (state.queries.region.length > 0) {
            state.queryString += `&region=${state.queries.region}`
        }
        if (state.queries.sort_by.length > 0) {
            state.queryString += `&sort_by=${state.queries.sort_by}`
        }
        if (state.queries.certification_country.length > 0) {
            state.queryString += `&certification_country=${state.queries.certification_country}`
        }
        if (typeof state.queries.include_adult == "boolean") {
            state.queryString += `&include_adult=${state.queries.include_adult}`
        }
        if (typeof state.queries.include_video == "boolean") {
            state.queryString += `&include_video=${state.queries.include_video}`
        }
        if (state.queries.page > 0) {
            state.queryString += `&page=${state.queries.page}`
        }
        if (state.queries.primary_release_year > 0) {
            state.queryString += `&primary_release_year=${state.queries.primary_release_year}`
        }
        if (state.queries.with_release_type > 1) {
            state.queryString += `&with_release_type=${state.queries.with_release_type}`
        }
    }
    return { state, createQueryString }
})
