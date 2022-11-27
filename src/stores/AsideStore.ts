import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { GetDiscoverMovieApi } from '@/services/DiscoverApi'


export const useAsideStore = defineStore('AsideStore', () => {
    const state = reactive({
        api_key: 'f62f750b70a8ef11dad44670cfb6aa57',
        category: (value:boolean) => {
            return `&category=${value}`
        },
        loading: false,
        without_companies: (value: string) => {
            return `&without_companies=${value}`
        },
        with_watch_monetization_types: (value: string) => {
            return `&with_watch_monetization_types=${value}`
        },
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
        language:"",
        region:"SSS",
        sort_by:"",
        certification_country:"",
        certification: {
            DEFAULT: "",
            lte: '',
            gte: '' 
        },
        include_adult:false,
        include_video:false,
        page:1,
        primary_release_year: 0,
        primary_release_date: {
            lte: '',
            gte: '' 
        },
        release_date: {
            lte: '',
            gte: ''    
        },
        with_release_type:1,
        
    })

    const createQuery = () => {
        return state.category(false)
    }

    const getData = async () => {
        
        try {
            const data = await GetDiscoverMovieApi('movie',createQuery())
            
            console.log('data',data);
        } catch (error) {
            
        }
    }
    return { state, getData }
})
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
