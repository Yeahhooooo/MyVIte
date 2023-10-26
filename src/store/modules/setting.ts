import { defineStore } from 'pinia'
import { SettingState } from './types/setting'

let settingStore = defineStore('SettingStore', {
  state: (): SettingState => {
    return {
      fold: false,
    }
  },
  actions: {
    setFold(state: boolean) {
      this.fold = state
    },
  },
})

export default settingStore
