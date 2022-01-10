import { reactive, readonly } from "vue";

const state = reactive<any>({});

export const getDataStore = (key: symbol) => {
  return state[key];
};
export const setDataStore = (key: symbol, value: any) => {
  state[key] = value;
};

export default { state: readonly(state), getDataStore, setDataStore };
