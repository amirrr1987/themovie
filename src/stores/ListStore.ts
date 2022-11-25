import { GetListApi } from "../services/ListApi";
import { defineStore } from "pinia";
import type { ListModel } from "@/models";
import { reactive } from "vue";
export const useListStore = defineStore("cv", () => {
    const state = reactive<ListModel>({

    });

    const GetListStore = async () => {
        try {
            const data = await GetListApi('1')
        } catch (error) {
            
        }
    }

    return {
        state,
        GetListStore

    };
});
