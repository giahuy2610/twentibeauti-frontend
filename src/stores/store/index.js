import { defineStore } from "pinia";

export const useIndexStorePinia = defineStore("indexStorePinia", {
  state: () => ({
    userName: "Huy Trinh Gia",
    userPhone: "941510664",
    userPoint: 12,
    isVisibleLogin: false,
    user: null,
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    login(user) {
      state.user = user;
    },
  },
  persist: true,
});
