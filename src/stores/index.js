import { defineStore } from 'pinia'

export const useIndexStorePinia = defineStore('indexStorePinia', {
  state: () => {
    return {
      userName: 'Huy Trinh Gia',
      userPhone: '941510664',
      userPoint: 12
    }
  },
  persist: true,
})