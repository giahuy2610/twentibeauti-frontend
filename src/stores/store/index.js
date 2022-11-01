import { defineStore } from "pinia";

export const useIndexStorePinia = defineStore("indexStorePinia", {
  state: () => {
    return {
      userName: "Huy Trinh Gia",
      userPhone: "941510664",
      userPoint: 12,
      loggedIn: false,
      isVisibleLogin: false,
      user: null
    };
  },
  getters: () => {},
  // actions: {
  //   async register(context, { email, password, name }) {
  //     const response = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     if (response) {
  //       context.commit("SET_USER", response.user);
  //       response.user.updateProfile({ displayName: name });
  //     } else {
  //       throw new Error("Unable to register user");
  //     }
  //   },

  //   async logIn(context, { email, password }) {
  //     const response = await signInWithEmailAndPassword(auth, email, password);
  //     if (response) {
  //       context.commit("SET_USER", response.user);
  //     } else {
  //       throw new Error("login failed");
  //     }
  //   },

  //   async logOut(context) {
  //     await signOut(auth);
  //     context.commit("SET_USER", null);
  //   },

  //   async fetchUser(context, user) {
  //     context.commit("SET_LOGGED_IN", user !== null);
  //     if (user) {
  //       context.commit("SET_USER", {
  //         displayName: user.displayName,
  //         email: user.email,
  //       });
  //     } else {
  //       context.commit("SET_USER", null);
  //     }
  //   },
  // },
  persist: true,
});
