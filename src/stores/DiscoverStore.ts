import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import { getDiscoverApi } from "@/services/DiscoverApi";
import { cloneDeep, assign } from "lodash";
import type { State } from "@/models/discover";
import { _init } from "@/init/discover";
import { clg } from "@/utils";

export const useDiscoverStore = defineStore("Discover", () => {
  const state = reactive<State>(_init);
  const cloneState = cloneDeep<State>(_init);
  const resetState = () => {
    Object.assign(state, cloneState);
  };
  const getDiscoverHandler = async ({
    type,
    query,
  }: {
    type: string;
    query: string[];
  }) => {
    try {
      const { data } = await getDiscoverApi({ type: type, query: query });
      assign(state.discover, data);
    } catch (error) {
      clg.logger({
        name: "error",
        value: error,
        path: "DiscoverStore.ts",
        line: "20",
        commit: "getDiscoverHandler",
        isActive: false,
      });
    }
  };

  return { state, resetState, getDiscoverHandler };
});
