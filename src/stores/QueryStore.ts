import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useQueryStore = defineStore('QueryStore', () => {
    const state = reactive(
        {
            queries: {
                api_key: 'f62f750b70a8ef11dad44670cfb6aa57',
                category: '',
                withoutCompanies: '',
                withWatchMonetizationTypes: '',
                watchRegion: '',
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
                region: "SSS",
                sort_by: "",
                certification_country: "",
                certification: {
                    DEFAULT: "",
                    lte: '',
                    gte: ''
                },
                include_adult: false,
                include_video: false,
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

        // if (state.queries.language.length > 0) {
        //     state.queryString += `&language=${state.queries.language}`
        // }

        // if (state.queries.region.length > 0) {
        //     state.queryString += `&region=${state.queries.region}`
        // }
        // if (state.queries.sort_by.length > 0) {
        //     state.queryString += `&sort_by=${state.queries.sort_by}`
        // }
        // if (state.queries.certification_country.length > 0) {
        //     state.queryString += `&certification_country=${state.queries.certification_country}`
        // }

        // if (state.queries.certification.DEFAULT.length > 0) {
        //     state.queryString += `&certification=${state.queries.certification}`
        // }
        if (state.queries.page > 0) {
            state.queryString += `&page=${state.queries.page}`
        }


        // +
        // `&category=${state.category}`
        // +
        // `&without_companies=${state.withoutCompanies}`
        // +
        // `&with_watch_monetization_types=${state.withWatchMonetizationTypes}`
        // +
        // `&watch_region=${state.watchRegion}`
        // +
        // `&with_watch_providers=${state.with_watch_providers}`
        // +
        // `&with_original_language=${state.with_original_language}`
        // +
        // `&with_runtime_gte=${state.with_runtime.gte}`
        // +
        // `&with_runtime_lte=${state.with_runtime.lte}`
        // +
        // `&without_keywords=${state.without_keywords}`
        // +
        // `&with_keywords=${state.with_keywords}`
        // +
        // `&without_genres=${state.without_genres}`
        // +
        // `&with_genres=${state.with_genres}`
        // +
        // `&with_companies=${state.with_companies}`
        // +
        // `&with_people=${state.with_people}`
        // +
        // `&with_crew=${state.with_crew}`
        // +
        // `&with_cast=${state.with_cast}`
        // +
        // `&vote_average_gte=${state.vote_average.gte}`
        // +
        // `&vote_average_lte=${state.vote_average.lte}`
        // +
        // `&vote_count_gte=${state.vote_count.gte}`
        // +
        // `&vote_count_lte=${state.vote_count.lte}`
        // +
        // `&year=${state.year}`
        // +
        // 
        // +
        // `&region=${state.region}`
        // +
        // `&sort_by=${state.sort_by}`
        // +
        // `&certification_country=${state.certification_country}`
        // +
        // `&certification=${state.certification}`
        // +
        // `&certification_gte=${state.certification.gte}`
        // +
        // `&certification_lte=${state.certification.lte}`
        // +
        // `&include_adult=${state.include_adult}`
        // +
        // `&include_video=${state.include_video}`
        // +
            // `&page=${state.page}`
        // +
        // `&primary_release_year=${state.primary_release_year}`
        // +
        // `&primary_release_date_lte=${state.primary_release_date.lte}`
        // +
        // `&primary_release_date_gte=${state.primary_release_date.gte}`
        // +
        // `&release_date_lte=${state.release_date.lte}`
        // +
        // `&release_date_gte=${state.release_date.gte}`
        // +
        // `&with_release_type=${state.with_release_type}`


        // return queryString
    }

    // const setQuery = (key, data) => {
    //     state.queries[key] = data
    // }


    return { state, createQueryString }
})
















