import { reactive, readonly } from "vue";

const state = reactive({});

export default { state: readonly(state) };
