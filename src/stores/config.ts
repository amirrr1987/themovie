import { reactive } from "vue";
import { defineStore } from "pinia";
import {
  getConfigurationApi,
  getCountriesApi,
  getLanguagesApi,
} from "@/services/config";
import { assign, cloneDeep } from "lodash";
import type { State } from "@/models/config";
import { _init } from "@/init/config";
import { clg } from "@/utils";
export const useConfigurationStore = defineStore("configuration", () => {
  const state = reactive<State>(_init);
  const cloneState = cloneDeep<State>(_init);
  const resetState = () => {
    assign(state, cloneState);
  };
  const getConfigurationHandler = async () => {
    try {
      const { data } = await getConfigurationApi();
      assign(state.configuration.change_keys, data.change_keys);
      assign(state.configuration.images, data.images);
    } catch (error) {
      clg.logger({
        name: "error",
        value: error,
        path: "Configuration.ts",
        line: "24",
        commit: "getConfigurationHandler",
      });
    }
  };
  const getCountriesHandler = async () => {
    try {
      const { data } = await getCountriesApi();
      assign(state.configuration.countries, data);
    } catch (error) {
      clg.logger({
        name: "error",
        value: error,
        path: "Configuration.ts",
        line: "37",
        commit: "getCountriesHandler",
      });
    }
  };
  const getLanguagesHandler = async () => {
    try {
      const { data } = await getLanguagesApi();
      assign(state.configuration.languages, data);
    } catch (error) {
      clg.logger({
        name: "error",
        value: error,
        path: "Configuration.ts",
        line: "44",
        commit: "getLanguagesHandler",
      });
    }
  };
  const getImageUrl = (path: string) => {
    return (
      state.configuration.images.base_url +
      state.configuration.images.poster_sizes[3] +
      path
    )
  }
  return {
    state,
    resetState,
    getConfigurationHandler,
    getCountriesHandler,
    getLanguagesHandler,
    getImageUrl
  }
});
