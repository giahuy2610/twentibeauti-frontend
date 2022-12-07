import { defineStore } from "pinia";
import axios from "axios";
import { useCartStorePinia } from "./cart.js";
export const useInfoAccountStorePinia = defineStore("infoAccountStorePinia", {
  state: () => ({
    infoCus: {},
  }),
  getters: {
    getInfoCus(state) {
      return state.infoCus;
    },
  },

  actions: {
    async loadDefaultInfoCus() {
      await axios
        .get("/customer/show/" + useCartStorePinia().user.IDCus)
        .then((response) => {
          this.infoCus = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async updatedInfoCus() {
      await axios
        .put("/customer/update/1", this.getInfoCus)
        .then((response) => {
          console.log(response.data.email);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
});
