import { defineStore } from 'pinia'

export const useIndexAdminStorePinia = defineStore('indexAdminStorePinia', {
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