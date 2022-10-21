import { defineStore } from 'pinia'

export const useIndexStorePinia = defineStore('indexStorePinia', {
  state: () => {
    return {
        isLoggedIn: true
    }
  },
  persist: true,
})