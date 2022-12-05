import { defineStore } from "pinia";
import axios from "axios";

export const useCartStorePinia = defineStore("cartStorePinia", {
  state: () => ({
    // @type {{ name: string, SKU: int, retailPrice: int, imagePath: string, routePath: string, quantity: int}[]}
    cartItems: [],
    total: 0,
    user: null,
    isVisibleLogin: true,
  }),
  getters: {
    getCartItemsNumber(state) {
      return state.cartItems.length;
    },
  },
  actions: {
    increaseTotal() {
      this.total++;
    },
    // async addCartItem(newItem) {
    //   //newItem @type {{ name: string, SKU: int, retailPrice: int, imagePath: string, routePath: string}[]}
    //   // check if the item already
    //   // if (this.cartItems.find((e) => e.IDProduct === newItem.IDProduct)) {
    //   //   //increase quantity
    //   //   this.cartItems.find((e) => e.IDProduct === newItem.IDProduct)
    //   //     .Quantity++;
    //   // } else {
    //   //   //add new item to cartItems list, remember to init the Quantity for it
    //   //   newItem.Quantity = 1;
    //   //   this.cartItems.push(newItem);
    //   // }
    //   console.log(newItem.IDProduct);
    //   await axios
    //     .post("/cart/update", {
    //       IDCus: this.user["IDCus"],
    //       IDProduct: newItem.IDProduct,
    //       IsAdd: 1,
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // },
    async increaseQuantity(IDProduct) {
      // //check available quantity
      // var available = 10;
      // var item = this.cartItems.find((e) => e.IDProduct === SKU);
      // if (available < item.Quantity + 1) {
      //   return "Không đủ số lượng";
      // } else {
      //   item.Quantity++;
      // }
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
      // var available = 10;
      // var item = this.cartItems.find((e) => e.IDProduct === SKU);
      // if (available < item.Quantity - 1) {
      //   return "Không đủ số lượng";
      // } else {
      //   item.Quantity--;
      //   //remove if the quantity isn't greater than 0
      //   if (item.Quantity === 0) this.removeItem(SKU);
      // }
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
          this.total = 10;
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  persist: true,
});
