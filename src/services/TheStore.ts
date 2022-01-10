import { reactive, readonly } from "vue";

const State = reactive<any>({});

export const GetDataStore = (key: symbol) => {
  return State[key];
};
export const SetDataStore = (key: symbol, value: any) => {
  State[key] = value;
};

export default { state: readonly(State), GetDataStore, SetDataStore };
