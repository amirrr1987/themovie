import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'


export const useAsideStore = defineStore('AsideStore', () => {
    const state = reactive({
        category: false,
        loading: false,
    })
    return { state }
})
