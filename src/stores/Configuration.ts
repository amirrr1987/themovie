import { reactive } from "vue";
import { defineStore } from "pinia";
import {
  getConfigurationApi,
  getCountriesApi,
  getLanguagesApi,
} from "@/services/Configuration";
import { assign, cloneDeep } from "lodash";
import type { State } from "@/models/configuration";
import { _init } from "@/init/configuration";
import { clg } from "@/utils";
export const useConfigurationStore = defineStore("Configuration", () => {
  const state = reactive<State>(_init);
  const cloneState = cloneDeep<State>(_init);
  const resetState = () => {
    Object.assign(state, cloneState);
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
  return {
    state,
    resetState,
    getConfigurationHandler,
    getCountriesHandler,
    getLanguagesHandler,
  };
});
