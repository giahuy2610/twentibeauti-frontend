import { defineStore } from "pinia";
import axios from "axios";

export const useCartStorePinia = defineStore("cartStorePinia", {
  state: () => ({
    // @type {{ name: string, SKU: int, retailPrice: int, imagePath: string, routePath: string, quantity: int}[]}
    cartItems: [],
    user: null,
    isVisibleLogin: true,
    visibleCart: false,
    numberOfProduct: 1,
  }),
  getters: {
    getCartItemsNumber(state) {
      return state.cartItems.length;
    },
  },
  actions: {
    total() {
      let totaltemp = 0;
      this.cartItems.forEach((element) => {
        totaltemp += element.RetailPrice * element.Quantity;
      });
      return totaltemp;
    },
    async removeAll() {
      this.cartItems.forEach((element) => {
        this.removeItem(element["IDProduct"]);
      });
    },
    async increaseQuantity(IDProduct) {
      console.log(IDProduct);
      await axios
        .post("/cart/update", {
          IDCus: this.user["IDCus"],
          IDProduct: IDProduct,
          IsAdd: 1,
        })
        .then((response) => {
          this.cartItems = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },

    async decreaseQuantity(IDProduct) {
      console.log(IDProduct);
      await axios
        .post("/cart/update", {
          IDCus: this.user["IDCus"],
          IDProduct: IDProduct,
          IsAdd: 0,
        })
        .then((response) => {
          this.cartItems = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },

    async removeItem(IDProduct) {
      // this.cartItems = this.cartItems.filter((e) => e.IDProduct !== SKU);
      await axios
        .post("/cart/destroy", {
          IDCus: this.user["IDCus"],
          IDProduct: IDProduct,
        })
        .then((response) => {
          this.cartItems = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    async getCartItem() {
      console.log(this.user["IDCus"]);
      await axios
        .post("/cart/show", { IDCus: this.user["IDCus"] })
        .then((response) => {
          console.log(response.data);
          this.cartItems = response.data;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  persist: true,
});
