import { defineStore } from 'pinia'
import { SettingState } from './types/setting'

let settingStore = defineStore('SettingStore', {
  state: (): SettingState => {
    return {
      fold: false,
      refresh: false,
    }
  },
  actions: {
    setFold(state: boolean) {
      this.fold = state
    },
    setRefresh(state: boolean) {
      this.refresh = state
    }
  },
})

export default settingStore
