import { defineStore } from 'pinia'

export const useIndexStorePinia = defineStore('indexStorePinia', {
  state: () => {
    return {
        isLoggedIn: false
    }
  },
  persist: true,
})