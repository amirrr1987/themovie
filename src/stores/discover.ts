import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { getDiscoverApi } from '@/services/discover'
import { cloneDeep, assign } from 'lodash'
import type { State } from '@/models/discover'
import { _init } from '@/init/discover'
import { clg } from '@/utils'

interface Params {
  type: string
  query: string[]
}

export const useDiscoverStore = defineStore('Discover', () => {
  const state = reactive<State>(_init)
  const cloneState = cloneDeep<State>(_init)
  const resetState = () => {
    assign(state, cloneState)
  }

  const getDiscoverHandler = async ({ type, query }: Params) => {
    try {
      const { data } = await getDiscoverApi({ type: type, query: query })
      assign(state.discover, data)
    } catch (error) {
      clg.logger({
        name: 'error',
        value: error,
        path: 'DiscoverStore.ts',
        line: '20',
        commit: 'getDiscoverHandler'
      })
    }
  }

  return { state, resetState, getDiscoverHandler }
})
