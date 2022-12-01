import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { getConfigurationApi, getCountriesApi, getLanguagesApi } from '@/services/ConfigurationApi'
import { cloneDeep } from "lodash";
export interface State {
    configuration: Configuration;
}
export interface Configuration {
    images: Images;
    change_keys: string[];
    countries: Country[];
    languages: Languages[];
}
export interface Images {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
}
export interface Country {
    iso_3166_1: string;
    english_name: string;
    native_name: string;
}
export interface Languages {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export const useConfigurationStore = defineStore('Configuration', () => {
    const obj = {
        "configuration": {
            "images": {
                "base_url": "",
                "secure_base_url": "",
                "backdrop_sizes": [],
                "logo_sizes": [],
                "poster_sizes": [],
                "profile_sizes": [],
                "still_sizes": []
            },
            "change_keys": [],
            "countries": [],
            "languages": []
        }
    }
    const state = reactive<State>(obj)
    const cloneState = cloneDeep<State>(obj)
    const resetState = () => {
        Object.assign(state, cloneState)
    }
    const getConfigurationHandler = async () => {
        try {
            const { data } = await getConfigurationApi()
            Object.assign(state.configuration.change_keys, data.change_keys)
            Object.assign(state.configuration.images, data.images)
        } catch (error) {
        }
    }
    const getCountriesHandler = async () => {
        try {
            const { data } = await getCountriesApi()
            Object.assign(state.configuration.countries, data)
        } catch (error) {
        }
    }
    const getLanguagesHandler = async () => {
        try {
            const { data } = await getLanguagesApi()
            Object.assign(state.configuration.languages, data)
        } catch (error) {
        }
    }
    return { state, resetState, getConfigurationHandler, getCountriesHandler, getLanguagesHandler }
})
