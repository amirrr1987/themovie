import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { cloneDeep, assign } from 'lodash'
import type { State } from '@/models/query'
import { _init } from '@/init/query'

export const useQueryStore = defineStore('query', () => {
  const state = reactive<State>(_init)
  const cloneState = cloneDeep<State>(_init)
  const resetState = () => {
    assign(state, cloneState)
  }

  const setQueryHandler = (label: string, value: any) => {
    const index = state.query.findIndex((item: { label: string }) => item.label === label)
    if (index >= 0) {
      state.query.splice(index, 1)
    }
    state.query.push({
      label: label,
      value: value
    })
  }
  return { state, resetState, setQueryHandler }
})
