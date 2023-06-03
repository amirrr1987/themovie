import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { getMovieApi } from "@/services/movie";
import { cloneDeep, assign } from "lodash-es";
import type { State } from "@/models/movie";
import { _init } from "@/init/movie";
import { clg } from "@/utils";

export const useMovieStore = defineStore("movie", () => {
  const state = reactive<State>(_init);
  const cloneState = cloneDeep<State>(_init);
  const resetState = () => {
    assign(state, cloneState);
  };
  const getMovieHandler = async ({ movieId }: { movieId: string }) => {
    try {
      const {data}  = await getMovieApi({ movieId: movieId });
      assign(state.movie, data);      
    } catch (error) {
      clg.logger({
        name: "error",
        value: error,
        path: "Movie.ts",
        line: "20",
        commit: "getMovieHandler",
      });
    }
  };
  return { state, resetState, getMovieHandler };
});
