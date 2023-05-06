import { defineStore } from "pinia";
import { computed, reactive } from "vue";
// import { getMovieApi } from "@/services/movie";
import { cloneDeep, assign } from "lodash";
import type { State } from "@/models/query";
import { _init } from "@/init/query";
import { clg } from "@/utils";

export const useQueryStore = defineStore("Query", () => {
  const state = reactive<State>(_init);
  const cloneState = cloneDeep<State>(_init);
  const resetState = () => {
    assign(state, cloneState);
  };
  const setQueryHandler = ({
    queryLabel,
    queryValue,
  }: {
    queryLabel: string;
    queryValue: any;
  }) => {
    console.log(queryLabel);
    console.log(queryValue);
  };

  return { state, resetState, setQueryHandler };
});
