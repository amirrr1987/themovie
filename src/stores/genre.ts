import { ref, computed, reactive, Static } from "vue";
import { defineStore } from "pinia";
import { getGenreApi } from "@/services/genre";
import { cloneDeep, assign, find } from "lodash-es";
import { clg } from "@/utils";
import type { State } from "@/models/genre";
import { _init } from "@/init/genre";

export const useGenreStore = defineStore("Genre", () => {
  const state = reactive<State>(_init);
  const cloneState = cloneDeep<State>(_init);
  const resetState = () => {
    assign(state, cloneState);
  };
  const getGenreHandler = async ({ type }: { type: string }) => {
    try {
      const { data } = await getGenreApi({ type: type });
      assign(state, data);
    } catch (error) {
      clg.logger({
        name: "error",
        value: error,
        path: "GenreStore.ts",
        line: "32",
        commit: "getGenreHandler",
        isActive: false,
      });
    }
  };
  const findGenreNameById = ({ id }: { id: number }) => {
    return find(state.genres, { id: id });
  };
  return { state, resetState, getGenreHandler, findGenreNameById };
});
