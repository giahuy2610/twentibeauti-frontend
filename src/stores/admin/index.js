import { defineStore } from 'pinia'

export const useIndexStorePinia = defineStore('indexStorePinia', {
  state: () => {
    return {
        isLoggedIn: false
    }
  },
  actions: {
    logout() {
      this.isLoggedIn = false;
      // this.$route.push({path:});
    }
  },
  persist: true,
})